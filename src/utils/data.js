let cachedData = null;

// Fetches and caches data from data.json. Returns the full data object.
export async function getData() {
    if (cachedData) return cachedData;
    const response = await fetch("/public/data.json");
    cachedData = await response.json();
    return cachedData;
}