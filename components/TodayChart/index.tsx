import { getFullSignName } from "@/lib/util";
import { type RootObject } from "@/types/astro";

type props = {
  data?: RootObject;
};

export default function TodayChart({ data }: props) {
  return (
    <section className="flex flex-col">
      <h2 className="flex items-baseline mb-2">
        <span className="font-serif text-2xl text-secondary-400">
          The Sky Today
        </span>
        <span className="mx-2 font-serif text-base-300">|</span>
        <span className="font-serif text-base-300 text-sm"></span>
      </h2>
      <table className="table-auto border-collapse border border-base-700 md:w-1/2">
        <thead>
          <tr className="bg-base-700 text-left">
            <th className="p-2 font-normal tracking-wide">Planet</th>
            <th className="p-2 font-normal tracking-wide">Degree</th>
            <th className="p-2 font-normal tracking-wide">Sign</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  );
}
