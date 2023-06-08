import { getNow } from "@/lib/astro";
import { getFullSignName } from "@/lib/util";
type props = {
  now: any;
};

export default function TodayChart({ now }: props) {
  const planets = [
    now.sun,
    now.moon,
    now.mercury,
    now.venus,
    now.mars,
    now.jupiter,
    now.saturn,
    now.uranus,
    now.neptune,
    now.pluto,
  ];
  const houses = [
    now.first_house,
    now.second_house,
    now.third_house,
    now.fourth_house,
    now.fifth_house,
    now.sixth_house,
    now.seventh_house,
    now.eighth_house,
    now.ninth_house,
    now.tenth_house,
    now.eleventh_house,
    now.twelfth_house,
  ];
  const nodes = [now.mean_node, now.true_node];
  const lunarPhase = now.lunar_phase;
  return (
    <section className="mt-8">
      <h2 className="text-xl font-serif text-secondary-400">The Sky Today</h2>
      {planets.map((planet, id) => (
        <p key={id}>{`${planet.name}${
          planet.retrograde ? " Retrograde" : ""
        } ${planet.position.toFixed(2)}° ${getFullSignName(
          planet.sign_num
        )}`}</p>
      ))}
    </section>
  );
}
