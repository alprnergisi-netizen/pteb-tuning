export interface Location {
  slug: string;
  city: string;
  state: string;
  stateShort: string;
  country: "AU" | "NZ";
  deliveryDays: string;
  population: string;
  intro: string;
  faq: { q: string; a: string }[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "sydney",
    city: "Sydney",
    state: "New South Wales",
    stateShort: "NSW",
    country: "AU",
    deliveryDays: "5–7",
    population: "largest city in Australia",
    intro: "Sydney is one of PTEB's most active remote tuning markets. With no specialist ECU tuning workshop in NSW delivering the same calibration depth as PTEB Melbourne, the Warport device has become the go-to solution for Sydney's performance car community — delivering a full custom tune to your door without the 800km drive south.",
    faq: [
      { q: "Can I get an ECU tune in Sydney without going to Melbourne?", a: "Yes. The PTEB Warport remote tuning device ships to Sydney (NSW) within 5–7 business days. You plug it into your OBD port, connect via the PTEB app, and our Melbourne-based tuners calibrate your engine remotely — no interstate travel required." },
      { q: "How much does remote ECU tuning cost for Sydney customers?", a: "The PTEB Warport device costs $499 AUD with free shipping to Sydney. The custom tune file is priced separately based on your platform. Remote tuning via Warport is significantly cheaper than a workshop dyno tune ($800–$2,500+) and delivers equivalent calibration quality." },
      { q: "Is remote ECU tuning legal in NSW?", a: "ECU modifications fall under NSW vehicle modification rules. Refer to the NSW Roads and Maritime Services guide for your specific modification. PTEB recommends consulting with a licensed vehicle inspector before tuning a vehicle that will be presented for a blue slip." },
      { q: "Which cars can be remote-tuned in Sydney?", a: "Any supported European turbocharged platform can be tuned remotely in Sydney. This includes Audi (EA888, DAZA), BMW (B48, B58, S55, S58), Volkswagen Golf R/GTI, Mercedes-AMG (M133, M177), and Porsche (9A2). Contact PTEB before purchasing to confirm your specific vehicle." },
    ],
  },
  {
    slug: "brisbane",
    city: "Brisbane",
    state: "Queensland",
    stateShort: "QLD",
    country: "AU",
    deliveryDays: "5–7",
    population: "Australia's fastest-growing major city",
    intro: "Brisbane's performance car scene is growing fast — and so is demand for professional ECU tuning that doesn't require a trip to a southern state. The PTEB Warport lets Queensland performance enthusiasts access PTEB's Melbourne-quality calibration from their own garage, with the device shipping to Brisbane in 5–7 business days.",
    faq: [
      { q: "Can I get a custom ECU tune in Brisbane remotely?", a: "Yes. PTEB Tuning ships the Warport OBD2 tuning device to Brisbane, QLD within 5–7 business days. Once connected via the PTEB app, our Melbourne tuners build and deliver a full custom ECU calibration to your car — no workshop visit needed." },
      { q: "Does remote ECU tuning work in Queensland's climate?", a: "Yes. The PTEB Warport uses live data logging to calibrate specifically for your ambient conditions, including Queensland's higher temperatures. Thermal management maps are adjusted to account for IAT (intake air temperature) in hot climates." },
      { q: "How do I get started with remote tuning in Brisbane?", a: "Contact PTEB via the website or WhatsApp (0422 300 859) for a free pre-approval check. Tell us your car, mods, and fuel type. If compatible, you order the Warport, receive it in 5–7 days, and we guide you through the rest via the app." },
    ],
  },
  {
    slug: "perth",
    city: "Perth",
    state: "Western Australia",
    stateShort: "WA",
    country: "AU",
    deliveryDays: "7–10",
    population: "the most isolated major city in the world",
    intro: "Perth's isolation from Australia's eastern tuning workshops makes remote ECU tuning not just convenient but often the only practical option for WA's European performance car community. The PTEB Warport ships to Perth in 7–10 business days — giving Western Australian drivers access to the same calibration quality as PTEB's Melbourne workshop clients.",
    faq: [
      { q: "Is remote ECU tuning available in Perth, Western Australia?", a: "Yes. PTEB Tuning ships the Warport device to Perth, WA within 7–10 business days. Given the distance from major tuning workshops on the east coast, remote tuning via Warport is the most practical way for Perth drivers to access professional custom ECU calibration." },
      { q: "How long does delivery take from Melbourne to Perth?", a: "PTEB ships the Warport device from Melbourne. Standard delivery to Perth, WA takes 7–10 business days. Tracking is provided. Once you receive the device, the tune can typically be completed within 24–48 hours of connecting." },
      { q: "Can I tune my European car remotely in Perth?", a: "Yes — if your platform is supported. PTEB's Warport covers most modern Audi, BMW, Volkswagen, Mercedes-AMG, and Porsche turbocharged models. Contact PTEB before ordering to confirm compatibility for your specific car." },
    ],
  },
  {
    slug: "adelaide",
    city: "Adelaide",
    state: "South Australia",
    stateShort: "SA",
    country: "AU",
    deliveryDays: "5–7",
    population: "a growing performance car hub",
    intro: "Adelaide has a strong European car culture but a limited pool of tuners capable of delivering truly custom ECU calibration. PTEB Warport gives South Australian performance enthusiasts direct access to Melbourne-based expert tuning — delivered to your door in 5–7 business days.",
    faq: [
      { q: "Is remote ECU tuning available in Adelaide?", a: "Yes. PTEB ships the Warport device to Adelaide, SA in 5–7 business days. South Australian customers get access to the same custom ECU calibration as PTEB's Melbourne workshop clients — remotely, from their own garage." },
      { q: "What European cars can be remote-tuned in Adelaide?", a: "Supported platforms include Audi (EA888, DAZA, EA825), BMW (B48, B58, N55, S55, S58), VW Golf R/GTI, Mercedes-AMG (M133, M177), and Porsche. Contact PTEB to confirm your vehicle before purchasing." },
    ],
  },
  {
    slug: "canberra",
    city: "Canberra",
    state: "Australian Capital Territory",
    stateShort: "ACT",
    country: "AU",
    deliveryDays: "3–5",
    population: "Australia's capital",
    intro: "Canberra's proximity to Sydney and Melbourne makes it ideal for remote tuning — with delivery times of just 3–5 business days and easy access to PTEB support. ACT's European car community can now get a full custom calibration without the trip to either city.",
    faq: [
      { q: "Can I get a remote ECU tune in Canberra?", a: "Yes. The PTEB Warport ships to Canberra, ACT in 3–5 business days — one of the fastest delivery windows in Australia. Connect the device, use the app, and PTEB's Melbourne tuners deliver your custom calibration remotely." },
      { q: "How does PTEB remote tuning compare to Canberra local tuners?", a: "PTEB's Warport delivers a fully custom, dyno-quality calibration with live data logging and ongoing revisions — often exceeding the capability of general tuning shops. The $499 device gives you access to specialist European tuning expertise regardless of your location." },
    ],
  },
  {
    slug: "hobart",
    city: "Hobart",
    state: "Tasmania",
    stateShort: "TAS",
    country: "AU",
    deliveryDays: "7–10",
    population: "Tasmania's capital",
    intro: "Tasmania's separation from mainland Australia makes specialist ECU tuning workshops hard to access. The PTEB Warport solves this — shipping to Hobart and regional Tasmania in 7–10 business days and delivering a full custom calibration remotely.",
    faq: [
      { q: "Is remote ECU tuning available in Tasmania?", a: "Yes. PTEB ships to Hobart and all of Tasmania within 7–10 business days. The Warport device connects via OBD port and our tuners calibrate your engine remotely — no mainland trip required." },
    ],
  },
  {
    slug: "darwin",
    city: "Darwin",
    state: "Northern Territory",
    stateShort: "NT",
    country: "AU",
    deliveryDays: "7–10",
    population: "the tropical capital of the NT",
    intro: "Darwin's climate presents unique tuning challenges — high ambient temperatures and humidity demand careful IAT and thermal management calibration. PTEB's remote tuning via Warport accounts for NT conditions specifically, delivering a calibration tuned for Darwin's environment.",
    faq: [
      { q: "Can I get an ECU tune in Darwin remotely?", a: "Yes. PTEB ships to Darwin, NT in 7–10 business days. Our live data logging approach means the calibration is refined in your actual ambient conditions — particularly important in Darwin's high-temperature climate where intake air temperatures directly affect power and safety." },
    ],
  },
  {
    slug: "new-zealand",
    city: "New Zealand",
    state: "New Zealand",
    stateShort: "NZ",
    country: "NZ",
    deliveryDays: "10–14",
    population: "a major European car market",
    intro: "New Zealand has one of the highest rates of European car ownership per capita in the Asia-Pacific — and PTEB Tuning now serves NZ customers remotely via the Warport device. Whether you're in Auckland, Wellington, Christchurch, or regional NZ, our tuners calibrate your engine from Melbourne with international shipping in 10–14 business days.",
    faq: [
      { q: "Does PTEB Tuning ship the Warport to New Zealand?", a: "Yes. PTEB ships the Warport internationally to New Zealand. Delivery takes 10–14 business days. NZ customers pay $499 AUD for the device plus international shipping. The tune file is delivered remotely via the app once the device arrives." },
      { q: "What are the best European cars to tune in New Zealand?", a: "New Zealand has a strong market for Audi S3/RS3, VW Golf R, BMW M2/M3/M4, and Mercedes-AMG vehicles. Most of these platforms are fully supported by PTEB Warport. Contact PTEB before ordering to confirm compatibility for your specific NZ-spec vehicle." },
      { q: "Is ECU tuning legal in New Zealand?", a: "ECU modifications in NZ fall under NZTA vehicle modification requirements. Vehicles that have been modified may require a Low Volume Vehicle (LVV) certification depending on the modification level. PTEB recommends consulting an NZTA-approved certifier before tuning a vehicle that will be presented for WoF." },
      { q: "Can I get a remote ECU tune in Auckland?", a: "Yes. Auckland and all New Zealand locations are served by PTEB's remote tuning via Warport. The device ships from Melbourne in 10–14 business days. Once received, PTEB's tuners build and deliver a custom calibration remotely via the app." },
      { q: "How much does remote ECU tuning cost in New Zealand?", a: "The PTEB Warport device is $499 AUD plus international shipping to NZ. The custom tune file is priced separately based on your platform. All prices are in Australian dollars. New Zealand customers pay via the standard PTEB payment methods." },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
