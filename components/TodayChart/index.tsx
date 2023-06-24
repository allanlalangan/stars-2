import { type Data } from "@/types/astro";
import { getFullSignName, getPlanetGlyph, getSignGlyph } from "@/lib/util";

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
    <section className="flex flex-col mb-12 w-full lg:w-1/2 md:w-3/4 xl:w-1/3">
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
      <table className="table-auto border border-light-700 dark:border-base-700 border-collapse w-full mt-2">
        <thead>
          <tr className="dark:bg-base-700 bg-light-700">
            <th className="p-2 font-medium text-left">Planet</th>
            <th className="p-2 font-medium text-left">Degree</th>
            <th className="p-2 font-medium text-left">Sign</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, i) => (
            <tr key={i}>
              <td className="p-2 border-b border-light-700 dark:border-base-700">
                <div className="flex">
                  <span className="text-xl w-1/4 flex items-center">
                    {getPlanetGlyph(planet.name)}
                  </span>
                  <div className="w-3/4 flex">
                    <span className="">{planet.name} </span>
                    <div className="text-lg text-primary-300 ml-1">
                      {planet.retrograde ? "℞" : ""}
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-2 border-b border-light-700 dark:border-base-700">
                {planet.position.toFixed(2)}°
              </td>
              <td className="p-2 border-b border-light-700 dark:border-base-700">
                <div className="flex">
                  <span className="xl:w-2/3 w-3/4 md:w-1/2">
                    {getFullSignName(planet.sign_num)}
                  </span>
                  <span className="xl:w-1/3 w-1/4 md:w-1/2 flex justify-center items-center">
                    {getSignGlyph(planet.sign_num)}
                  </span>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td className="p-2 border-b border-light-700 dark:border-base-700">
              <div className="flex">
                <span className="text-xl w-1/4 flex items-center">☊</span>
                <div className="w-3/4 flex">
                  <span className="">North Node </span>
                  <div className="text-lg text-primary-300 ml-1">
                    {nodes[1].retrograde ? "℞" : ""}
                  </div>
                </div>
              </div>
            </td>
            <td className="p-2 border-b border-light-700 dark:border-base-700">
              {nodes[1].position.toFixed(2)}°
            </td>
            <td className="p-2 border-b border-light-700 dark:border-base-700">
              <div className="flex">
                <span className="xl:w-2/3 w-3/4 md:w-1/2">
                  {getFullSignName(nodes[1].sign_num)}
                </span>
                <span className="xl:w-1/3 w-1/4 md:w-1/2 flex justify-center items-center">
                  {getSignGlyph(nodes[1].sign_num)}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
