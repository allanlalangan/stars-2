export function getFullSignName(id?: number) {
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
}

export function getSignGlyph(id?: number) {
  switch (id) {
    case 0:
      return "♈︎";
    case 1:
      return "♉︎";
    case 2:
      return "♊︎";
    case 3:
      return "♋︎";
    case 4:
      return "♌︎";
    case 5:
      return "♍︎";
    case 6:
      return "♎︎";
    case 7:
      return "♏︎";
    case 8:
      return "♐︎";
    case 9:
      return "♑︎";
    case 10:
      return "♒︎";
    case 11:
      return "♓︎";
    default:
      return "Unknown";
  }
}

export function getPlanetGlyph(planet?: string) {
  switch (planet) {
    case "Sun":
      return "☉";
    case "Moon":
      return "☽";
    case "Mercury":
      return "☿";
    case "Venus":
      return "♀︎";
    case "Mars":
      return "♂︎";
    case "Jupiter":
      return "♃";
    case "Saturn":
      return "♄";
    case "Uranus":
      return "♅";
    case "Neptune":
      return "♆";
    case "Pluto":
      return "♇";
  }
}
