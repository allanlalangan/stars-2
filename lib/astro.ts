export const getNow = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.ASTROLOGER_RAPID_API_KEY!,
      "X-RapidAPI-Host": process.env.ASTROLOGER_RAPID_API_HOST!,
    },
  };
  const resp = await fetch(process.env.ASTROLOGER_RAPID_API_URL!, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.ASTROLOGER_RAPID_API_KEY!,
      "X-RapidAPI-Host": process.env.ASTROLOGER_RAPID_API_HOST!,
    },
    next: {
      revalidate: 60 * 60, // revalidate every hour
      tags: ["now"],
    },
  });
  if (!resp.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  } else {
    console.log("FETCH SUCCESS");
    const now = await resp.json();

    return now;
  }
};
