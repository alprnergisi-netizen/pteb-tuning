import "server-only";

const domain  = process.env.SHOPIFY_STORE_DOMAIN!;
const token   = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Shopify fetch failed: ${res.status}`);
  const { data, errors } = await res.json();
  if (errors) throw new Error(errors[0].message);
  return data as T;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: { amount: string; currencyCode: string };
}

interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  variants: { edges: { node: ShopifyVariant }[] };
}

const PRODUCT_VARIANTS_QUERY = `
  query ProductVariants($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      variants(first: 20) {
        edges {
          node {
            id
            title
            availableForSale
            price { amount currencyCode }
          }
        }
      }
    }
  }
`;

const CREATE_CART_MUTATION = `
  mutation CreateCart($variantId: ID!, $quantity: Int!) {
    cartCreate(input: {
      lines: [{ quantity: $quantity, merchandiseId: $variantId }]
    }) {
      cart { checkoutUrl }
      userErrors { field message }
    }
  }
`;

export async function getProductVariants(handle: string): Promise<ShopifyVariant[]> {
  const data = await shopifyFetch<{ product: ShopifyProduct }>(PRODUCT_VARIANTS_QUERY, { handle });
  return data.product.variants.edges.map((e) => e.node);
}

export async function createCheckout(variantId: string, quantity = 1): Promise<string> {
  const data = await shopifyFetch<{
    cartCreate: { cart: { checkoutUrl: string }; userErrors: { message: string }[] };
  }>(CREATE_CART_MUTATION, { variantId, quantity });

  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }
  return data.cartCreate.cart.checkoutUrl;
}
