export async function getNow() {
  const options = {
    headers: {
      "X-RapidAPI-Key": process.env.ASTROLOGER_RAPID_API_KEY!,
      "X-RapidAPI-Host": process.env.ASTROLOGER_RAPID_API_HOST!,
    },
  };
  const res = await fetch(process.env.ASTROLOGER_RAPID_API_URL!, options);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
