import { z } from "zod";

const serverSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_FROM_EMAIL: z.string().email().optional().default("onboarding@resend.dev"),
  ADMIN_EMAIL: z.string().email().optional().default("prestigeteamhelp@gmail.com"),
  CALCOM_API_KEY: z.string().min(1).optional(),
  CALCOM_API_URL: z.string().url().default("https://api.cal.com/v2"),
  SHOPIFY_STORE_DOMAIN: z.string().optional(),
  SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string().optional(),
  SHOPIFY_WARPORT_HANDLE: z.string().default("pteb-warport"),
  SHOPIFY_HOODIE_HANDLE: z.string().default("tuned-by-pteb-hoodie"),
  GOOGLE_SITE_VERIFICATION: z.string().optional(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("https://ptebtuning.com"),
  NEXT_PUBLIC_CALCOM_TUNING_LINK: z.string().default("prestige-team-euroboost-stxpvl/dyno-tune"),
  NEXT_PUBLIC_CALCOM_MECHANIC_LINK: z.string().default("prestige-team-euroboost-stxpvl/mechanic"),
});

const serverEnv = serverSchema.safeParse(process.env);
const clientEnv = clientSchema.safeParse(process.env);

if (!serverEnv.success) {
  console.error("Invalid server environment variables:", serverEnv.error.flatten().fieldErrors);
  if (process.env.NODE_ENV === "production") {
    throw new Error("Invalid server environment variables");
  }
}

if (!clientEnv.success) {
  console.error("Invalid client environment variables:", clientEnv.error.flatten().fieldErrors);
}

const env = {
  ...(serverEnv.success ? serverEnv.data : ({} as z.infer<typeof serverSchema>)),
  ...(clientEnv.success ? clientEnv.data : ({} as z.infer<typeof clientSchema>)),
};

export default env;
