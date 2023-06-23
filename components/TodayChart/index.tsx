import { type Data } from "@/types/astro";
import { getFullSignName } from "@/lib/util";

type TodayChartProps = {
  data: Data;
};

export default function TodayChart({ data }: TodayChartProps) {
  const today = new Date();
  const planets = [
    data.sun,
    data.moon,
    data.mercury,
    data.venus,
    data.mars,
    data.jupiter,
    data.saturn,
    data.uranus,
    data.neptune,
    data.pluto,
  ];

  const houses = [
    data.first_house,
    data.second_house,
    data.third_house,
    data.fourth_house,
    data.fifth_house,
    data.sixth_house,
    data.seventh_house,
    data.eighth_house,
    data.ninth_house,
    data.tenth_house,
    data.eleventh_house,
    data.twelfth_house,
  ];

  const nodes = [data.true_node, data.mean_node];

  return (
    <section className="flex flex-col mb-12">
      <h2 className="flex items-baseline">
        <span className="font-serif text-2xl dark:text-primary-300 text-primary-700">
          The Sky Today
        </span>
        <span className="mx-2 font-serif dark:text-base-300 text-base-700">
          |
        </span>
        <span className="font-serif text-sm dark:text-tertiary-300">
          {today.toDateString()}
        </span>
      </h2>
      <table className="table-auto border border-base-700 border-collapse md:w-1/2 lg:w-1/3 w-full mt-2">
        <thead>
          <tr className="bg-base-700">
            <th className="p-2 font-medium text-left">Planet</th>
            <th className="p-2 font-medium text-left">Degree</th>
            <th className="p-2 font-medium text-left">Sign</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, i) => (
            <tr key={i}>
              <td className="p-2 border-b border-base-700">{planet.name}</td>
              <td className="p-2 border-b border-base-700">
                {planet.position.toFixed(2)}°
              </td>
              <td className="p-2 border-b border-base-700">
                {getFullSignName(planet.sign_num)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
