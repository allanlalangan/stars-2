import { getFullSignName } from "@/lib/util";

type props = {
  now: any;
};

export default function TodayChart({ now }: props) {
  const today = new Date();
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
      <h2 className="flex mb-2 items-baseline">
        <span className="text-2xl font-serif text-secondary-400">
          The Sky Today
        </span>
        <span className="text-2xl font-serif text-base-500 mx-2">|</span>
        <span className="font-serif">{today.toDateString()}</span>
      </h2>
      <table className="table-auto w-full md:w-1/2 border-collapse border border-base-700">
        <thead>
          <tr>
            <th className="p-2 bg-base-800 tracking-wide text-secondary-400">
              Planet
            </th>
            <th className="p-2 bg-base-800 tracking-wide text-secondary-400">
              Degree
            </th>
            <th className="p-2 bg-base-800 tracking-wide text-secondary-400">
              Sign
            </th>
          </tr>
        </thead>
        <tbody>
          {!!now &&
            now !== undefined &&
            planets.map((planet, id) => (
              <tr key={id}>
                <td className="p-2 border-b border-base-700">{`${planet?.name}${
                  planet?.retrograde ? " Retrograde" : ""
                }`}</td>
                <td className="p-2 border-b border-base-700">{`${planet?.position.toFixed(
                  2
                )}°`}</td>
                <td className="p-2 border-b border-base-700">{`${getFullSignName(
                  planet?.sign_num
                )}`}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
