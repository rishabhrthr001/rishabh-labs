export interface GeoResult {
  countryCode: string | null;
  currency: "INR" | "USD";
}

const GEO_CACHE_KEY = "codekea_geo";
const GEO_CACHE_TIME = 1000 * 60 * 60 * 3; // 3 hours

export const getUserGeo = async (): Promise<GeoResult> => {
  try {
    // ---- cache first
    const cached = localStorage.getItem(GEO_CACHE_KEY);

    if (cached) {
      const parsed = JSON.parse(cached);

      if (Date.now() - parsed.timestamp < GEO_CACHE_TIME) {
        return parsed.data;
      }
    }

    // ---- fetch fresh
    const res = await fetch("https://ipwho.is/");
    const data = await res.json();

    const countryCode = data?.country_code || null;

    const result: GeoResult =
      countryCode === "IN"
        ? { countryCode, currency: "INR" }
        : { countryCode, currency: "USD" };

    // ---- store
    localStorage.setItem(
      GEO_CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        data: result,
      }),
    );

    return result;
  } catch (err) {
    console.error("Geo lookup failed:", err);

    return {
      countryCode: null,
      currency: "USD",
    };
  }
};
