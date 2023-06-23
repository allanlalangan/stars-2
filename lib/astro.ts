export async function getNow() {
  const res = await fetch(process.env.ASTROLOGER_RAPID_API_URL! + "/now", {
    // refetch every 12 hours
    next: { revalidate: 60 * 60 * 6 },
    headers: {
      "X-RapidAPI-Key": process.env.ASTROLOGER_RAPID_API_KEY!,
      "X-RapidAPI-Host": process.env.ASTROLOGER_RAPID_API_HOST!,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
