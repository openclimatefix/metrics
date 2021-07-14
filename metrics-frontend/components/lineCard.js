import LineChart from "./line";

import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  ArrowSmRightIcon,
} from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Stats({ data }) {
  return (
    <dl className="grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
      {data.map((item) => (
        <div key={item.name} className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">{item.name}</dt>
          <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-black-600">
              {item.stat}
              <span className="ml-2 text-sm font-medium text-gray-500">
                from {item.previousStat}
              </span>
            </div>

            <div
              className={classNames(
                item.changeType === "increase" && "bg-green-100 text-green-800",
                item.changeType === "decrease" && "bg-red-100 text-red-800",
                item.changeType === "same" && "bg-yellow-100 text-yellow-800",
                "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
              )}
            >
              <UpDownSameIcon changeType={item.changeType} />
              <span className="sr-only">
                {item.changeType === "increase" ? "Increased" : "Decreased"} by
              </span>
              {item.change}
            </div>
          </dd>
          <div className=" mt-4 h-48">
            <LineChart data={item.lineData} />
          </div>
        </div>
      ))}
    </dl>
  );
}

function UpDownSameIcon({ changeType }) {
  switch (changeType) {
    case "increase":
      return (
        <ArrowSmUpIcon
          className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
          aria-hidden="true"
        />
      );
    case "decrease":
      return (
        <ArrowSmDownIcon
          className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
          aria-hidden="true"
        />
      );
    default:
      return (
        <ArrowSmRightIcon
          className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-yellow-500"
          aria-hidden="true"
        />
      );
  }
}
