import { getFullSignName } from "@/lib/util";
import { type RootObject } from "@/types/astro";

type props = {
  data?: RootObject;
};

export default function TodayChart({ data }: props) {
  if (!data) return null;
  const planets = [
    data?.data.sun || null,
    data?.data.moon || null,
    data?.data.mercury || null,
    data?.data.venus || null,
    data?.data.mars || null,
    data?.data.jupiter || null,
    data?.data.saturn || null,
    data?.data.uranus || null,
    data?.data.neptune || null,
    data?.data.pluto || null,
  ];

  const nodes = {
    mean_node: data?.data.mean_node || null,
    true_node: data?.data.true_node || null,
  };

  const houses = [
    data?.data.first_house || null,
    data?.data.second_house || null,
    data?.data.third_house || null,
    data?.data.fourth_house || null,
    data?.data.fifth_house || null,
    data?.data.sixth_house || null,
    data?.data.seventh_house || null,
    data?.data.eighth_house || null,
    data?.data.ninth_house || null,
    data?.data.tenth_house || null,
    data?.data.eleventh_house || null,
    data?.data.twelfth_house || null,
  ];

  const lunarPhase = data?.data.lunar_phase;
  const dateString = new Date(
    data?.data.year!,
    data?.data.month! - 1,
    data?.data.day
  );
  return (
    <section className="flex flex-col">
      <h2 className="flex items-baseline mb-2">
        <span className="font-serif text-2xl text-secondary-400">
          The Sky Today
        </span>
        <span className="mx-2 font-serif text-base-300">|</span>
        <span className="font-serif text-base-300 text-sm">
          {dateString.toDateString()}
        </span>
      </h2>
      <table className="table-auto border-collapse border border-base-700 md:w-1/2">
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
      </table>
    </section>
  );
}
