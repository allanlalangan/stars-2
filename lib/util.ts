export const getFullSignName = (id: number) => {
  switch (id) {
    case 0:
      return "Aries";
    case 1:
      return "Taurus";
    case 2:
      return "Gemini";
    case 3:
      return "Cancer";
    case 4:
      return "Leo";
    case 5:
      return "Virgo";
    case 6:
      return "Libra";
    case 7:
      return "Scorpio";
    case 8:
      return "Sagittarius";
    case 9:
      return "Capricorn";
    case 10:
      return "Aquarius";
    case 11:
      return "Pisces";
    default:
      return "Unknown";
  }
};
