import Stats from "../components/stats";
import LineCard from "../components/lineCard";
import ManyCards from "../components/manyCards";

const topMetrics = [
  {
    name: "Total Balance",
    stat: "£123,456",
    previousStat: "£78,910",
    change: "420%",
    changeType: "increase",
    lineData: [
      {
        id: "total-cash",
        data: [
          { x: "2020-06-26", y: 30000 },
          { x: "2020-07-25", y: 25000 },
          { x: "2020-08-16", y: 20000 },
          { x: "2020-10-05", y: 55000 },
          { x: "2020-11-03", y: 45000 },
          { x: "2020-12-03", y: 85000 },
          { x: "2021-01-06", y: 75000 },
          { x: "2021-02-08", y: 80000 },
          { x: "2021-04-05", y: 65000 },
          { x: "2021-05-15", y: 123456 },
        ],
      },
    ],
  },
  {
    name: "CO2e Reduction",
    stat: "0t",
    previousStat: "0t",
    change: "0",
    changeType: "same",
    lineData: [
      {
        id: "carbon-reduction",
        data: [
          { x: "2020-06-26", y: 0 },
          { x: "2020-07-25", y: 0 },
          { x: "2020-08-16", y: 0 },
          { x: "2020-10-05", y: 0 },
          { x: "2020-11-03", y: 0 },
          { x: "2020-12-03", y: 0 },
          { x: "2021-01-06", y: 0 },
          { x: "2021-02-08", y: 0 },
          { x: "2021-04-05", y: 0 },
          { x: "2021-05-15", y: 0 },
        ],
      },
    ],
  },
  {
    name: "Total Contributors",
    stat: "20",
    previousStat: "24",
    change: "4",
    changeType: "decrease",
    lineData: [
      {
        id: "total-contributors",
        data: [
          { x: "2020-06-26", y: 1 },
          { x: "2020-07-25", y: 2 },
          { x: "2020-08-16", y: 4 },
          { x: "2020-10-05", y: 8 },
          { x: "2020-11-03", y: 9 },
          { x: "2020-12-03", y: 12 },
          { x: "2021-01-06", y: 15 },
          { x: "2021-02-08", y: 18 },
          { x: "2021-04-05", y: 24 },
          { x: "2021-05-15", y: 20 },
        ],
      },
    ],
  },
];
const communityMetrics = [
  {
    name: "Twitter Followers @jack_kelly",
    stat: "5,178",
    previousStat: "5,135",
    change: "0.8%",
    changeType: "increase",
    lineData: [
      {
        id: "total-cash",
        data: [
          { x: "2020-06-26", y: 4560 },
          { x: "2020-07-25", y: 4600 },
          { x: "2020-08-16", y: 4700 },
          { x: "2020-10-05", y: 4750 },
          { x: "2020-11-03", y: 4800 },
          { x: "2020-12-03", y: 4820 },
          { x: "2021-01-06", y: 4900 },
          { x: "2021-02-08", y: 5100 },
          { x: "2021-04-05", y: 5135 },
          { x: "2021-05-15", y: 5178 },
        ],
      },
    ],
  },
  {
    name: "Twitter Followers @openclimatefix",
    stat: "1,157",
    previousStat: "1,123",
    change: "3%",
    changeType: "increase",
    lineData: [
      {
        id: "carbon-reduction",
        data: [
          { x: "2020-06-26", y: 466 },
          { x: "2020-07-25", y: 600 },
          { x: "2020-08-16", y: 650 },
          { x: "2020-12-03", y: 800 },
          { x: "2021-02-08", y: 900 },
          { x: "2021-04-05", y: 1123 },
          { x: "2021-05-15", y: 1157 },
        ],
      },
    ],
  },
  {
    name: "Newsletter Subscribers",
    stat: "1,276",
    previousStat: "1,257",
    change: "1%",
    changeType: "increase",
    lineData: [
      {
        id: "total-contributors",
        data: [
          { x: "2020-06-26", y: 709 },
          { x: "2020-09-29", y: 749 },
          { x: "2020-09-30", y: 1089 },
          { x: "2021-02-10", y: 1165 },
          { x: "2021-04-05", y: 1257 },
          { x: "2021-05-15", y: 1276 },
        ],
      },
    ],
  },
  {
    name: "Daily Website Views",
    stat: "202",
    previousStat: "200",
    change: "1%",
    changeType: "increase",
    lineData: [
      {
        id: "total-cash",
        data: [
          { x: "2020-06-26", y: 171 },
          { x: "2021-01-06", y: 180 },
          { x: "2021-02-08", y: 190 },
          { x: "2021-04-05", y: 200 },
          { x: "2021-05-15", y: 202 },
        ],
      },
    ],
  },
  {
    name: "Total GitHub Stars",
    stat: "111",
    previousStat: "107",
    change: "3%",
    changeType: "increase",
    lineData: [
      {
        id: "carbon-reduction",
        data: [
          { x: "2020-06-26", y: 54 },
          { x: "2020-10-05", y: 60 },
          { x: "2020-11-03", y: 70 },
          { x: "2020-12-03", y: 80 },
          { x: "2021-01-06", y: 90 },
          { x: "2021-02-08", y: 100 },
          { x: "2021-04-05", y: 107 },
          { x: "2021-05-15", y: 111 },
        ],
      },
    ],
  },
  {
    name: "Total GitHub Repositories",
    stat: "19",
    previousStat: "20",
    change: "1",
    changeType: "decrease",
    lineData: [
      {
        id: "total-contributors",
        data: [
          { x: "2020-06-26", y: 13 },
          { x: "2020-07-25", y: 13 },
          { x: "2020-08-16", y: 15 },
          { x: "2020-10-05", y: 16 },
          { x: "2020-12-03", y: 17 },
          { x: "2021-02-08", y: 20 },
          { x: "2021-05-15", y: 19 },
        ],
      },
    ],
  },
  {
    name: "Datasets Published",
    stat: "0",
    previousStat: "0",
    change: "0",
    changeType: "same",
    lineData: [
      {
        id: "total-cash",
        data: [
          { x: "2020-06-26", y: 0 },
          { x: "2020-07-25", y: 0 },
          { x: "2020-08-16", y: 0 },
          { x: "2020-10-05", y: 0 },
          { x: "2020-11-03", y: 0 },
          { x: "2020-12-03", y: 0 },
          { x: "2021-01-06", y: 0 },
          { x: "2021-02-08", y: 0 },
          { x: "2021-04-05", y: 0 },
          { x: "2021-05-15", y: 0 },
        ],
      },
    ],
  },
  {
    name: "ML Competitions Hosted",
    stat: "0",
    previousStat: "0",
    change: "0",
    changeType: "same",
    lineData: [
      {
        id: "carbon-reduction",
        data: [
          { x: "2020-06-26", y: 0 },
          { x: "2020-07-25", y: 0 },
          { x: "2020-08-16", y: 0 },
          { x: "2020-10-05", y: 0 },
          { x: "2020-11-03", y: 0 },
          { x: "2020-12-03", y: 0 },
          { x: "2021-01-06", y: 0 },
          { x: "2021-02-08", y: 0 },
          { x: "2021-04-05", y: 0 },
          { x: "2021-05-15", y: 0 },
        ],
      },
    ],
  },
];
const commercialMetrics = [
  {
    name: "Product Revenue",
    stat: "£0",
    previousStat: "£0",
    change: "0",
    changeType: "same",
    lineData: [
      {
        id: "total-contributors",
        data: [
          { x: "2020-06-26", y: 0 },
          { x: "2020-07-25", y: 0 },
          { x: "2020-08-16", y: 0 },
          { x: "2020-10-05", y: 0 },
          { x: "2020-11-03", y: 0 },
          { x: "2020-12-03", y: 0 },
          { x: "2021-01-06", y: 0 },
          { x: "2021-02-08", y: 0 },
          { x: "2021-04-05", y: 0 },
          { x: "2021-05-15", y: 0 },
        ],
      },
    ],
  },
  {
    name: "Employees",
    stat: "4",
    previousStat: "3",
    change: "33%",
    changeType: "increase",
    lineData: [
      {
        id: "total-contributors",
        data: [
          { x: "2020-06-26", y: 3 },
          { x: "2020-07-25", y: 3 },
          { x: "2020-08-16", y: 3 },
          { x: "2020-10-05", y: 3 },
          { x: "2020-11-03", y: 3 },
          { x: "2020-12-03", y: 3 },
          { x: "2021-01-06", y: 3 },
          { x: "2021-02-08", y: 3 },
          { x: "2021-04-05", y: 3 },
          { x: "2021-05-15", y: 4 },
        ],
      },
    ],
  },
  {
    name: "Grants/Contracts Awarded",
    stat: "6",
    previousStat: "6",
    change: "0",
    changeType: "same",
    lineData: [
      {
        id: "total-contributors",
        data: [
          { x: "2020-06-26", y: 1 },
          { x: "2020-07-25", y: 2 },
          { x: "2020-08-16", y: 2 },
          { x: "2020-10-05", y: 2 },
          { x: "2020-11-03", y: 3 },
          { x: "2020-12-03", y: 3 },
          { x: "2021-01-06", y: 3 },
          { x: "2021-02-08", y: 5 },
          { x: "2021-04-05", y: 6 },
          { x: "2021-05-15", y: 6 },
        ],
      },
    ],
  },
  {
    name: "Partnerships",
    stat: "18",
    previousStat: "18",
    change: "0",
    changeType: "same",
    lineData: [
      {
        id: "total-contributors",
        data: [
          { x: "2020-06-26", y: 1 },
          { x: "2020-07-25", y: 2 },
          { x: "2020-08-16", y: 4 },
          { x: "2020-10-05", y: 8 },
          { x: "2020-11-03", y: 9 },
          { x: "2020-12-03", y: 12 },
          { x: "2021-01-06", y: 15 },
          { x: "2021-02-08", y: 18 },
          { x: "2021-04-05", y: 18 },
          { x: "2021-05-15", y: 18 },
        ],
      },
    ],
  },
];

export default function Index({ data }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* BANNER START */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="pr-16 sm:text-center sm:px-16">
            <p className="font-medium text-yellow-400">
              🚧 &nbsp;Work in progress. Most data is fake.
            </p>
          </div>
        </div>
      </div>
      {/* BANNER END */}
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              OCF Control Center
            </h1>
            {/* <p className="border border-red-400">
              {JSON.stringify(data, false, 2)}
            </p> */}
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
            {/* Replace with your content */}
            <div className="px-4 py-8 sm:px-0">
              <LineCard data={topMetrics} />
            </div>
            <div className="px-4 sm:px-0">
              <ManyCards data={communityMetrics} title="Community" />
              <ManyCards data={commercialMetrics} title="Commercial" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
  );
}
