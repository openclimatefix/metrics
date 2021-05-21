import LineChart from "./line";

import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  ArrowSmRightIcon,
} from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Stats({ data, title }) {
  return (
    <>
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-5 mt-10">
        {title} Metrics
      </h3>
      <dl className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden">
        {data.map((item) => (
          <div
            key={item.name}
            className="px-4 py-5 sm:p-6 shadow rounded-lg bg-white"
          >
            <dt className="text-sm font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-xl font-semibold text-black-600">
                {item.stat}
                <span className="ml-2 text-xs font-medium text-gray-500">
                  from {item.previousStat}
                </span>
              </div>

              {/* LAAAAAAAAAAAAAAAAA */}
              <div
                className={classNames(
                  item.changeType === "increase" &&
                    "bg-green-100 text-green-800",
                  item.changeType === "decrease" && "bg-red-100 text-red-800",
                  item.changeType === "same" && "bg-yellow-100 text-yellow-800",
                  "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium md:mt-2 lg:mt-0"
                )}
              >
                <UpDownSameIcon changeType={item.changeType} />
                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by
                </span>
                {item.change}
              </div>
            </dd>
            <div className="mt-4 h-48">
              <LineChart data={item.lineData} />
            </div>
          </div>
        ))}
      </dl>
    </>
  );
}

function UpDownSameIcon({ changeType }) {
  switch (changeType) {
    case "increase":
      return (
        <ArrowSmUpIcon
          className="-ml-1.5 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-green-500"
          aria-hidden="true"
        />
      );
    case "decrease":
      return (
        <ArrowSmDownIcon
          className="-ml-1.5 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-red-500"
          aria-hidden="true"
        />
      );
    default:
      return (
        <ArrowSmRightIcon
          className="-ml-1.5 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-yellow-500"
          aria-hidden="true"
        />
      );
  }
}
