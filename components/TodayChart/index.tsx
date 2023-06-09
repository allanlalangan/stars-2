import { getFullSignName } from "@/lib/util";
import { type RootObject } from "@/types/astro";

type props = {
  data: RootObject;
};

export default function TodayChart({ data }: props) {
  const today = new Date();
  const planets = [
    data.data.sun,
    data.data.moon,
    data.data.mercury,
    data.data.venus,
    data.data.mars,
    data.data.jupiter,
    data.data.saturn,
    data.data.uranus,
    data.data.neptune,
    data.data.pluto,
  ];

  const nodes = {
    mean_node: data.data.mean_node,
    true_node: data.data.true_node,
  };

  const houses = [
    data.data.first_house,
    data.data.second_house,
    data.data.third_house,
    data.data.fourth_house,
    data.data.fifth_house,
    data.data.sixth_house,
    data.data.seventh_house,
    data.data.eighth_house,
    data.data.ninth_house,
    data.data.tenth_house,
    data.data.eleventh_house,
    data.data.twelfth_house,
  ];

  const lunarPhase = data.data.lunar_phase;
  const dateString = new Date(
    data.data.year,
    data.data.month - 1,
    data.data.day
  );
  return (
    <section className="flex flex-col">
      <h2 className="flex items-baseline">
        <span className="font-serif text-2xl text-primary-300">
          The Sky Today
        </span>
        <span className="mx-2 font-serif text-base-300">|</span>
        <span className="font-serif text-base-300 text-sm">
          {today.toDateString()}
        </span>
      </h2>
      <span className="text-accent-300 italic">API coming soon.</span>
      {/* <table className="table-auto border-collapse border border-base-700 md:w-1/2 lg:w-1/3 mt-2">
        <thead>
          <tr className="bg-base-700 text-left">
            <th className="p-2 font-normal tracking-wide">Planet</th>
            <th className="p-2 font-normal tracking-wide">Degree</th>
            <th className="p-2 font-normal tracking-wide">Sign</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, id) => (
            <tr key={id}>
              <td className="p-2">{`${planet?.name}`}</td>
              <td className="p-2">{`${planet?.position.toFixed(2)}°`}</td>
              <td className="p-2">{`${getFullSignName(planet?.sign_num)}`}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </section>
  );
}
