import { useQuery } from "@tanstack/react-query";
import useBioData from "../Hooks/useBioData";
import usePremium from "../Hooks/usePremium";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoPeopleSharp } from "react-icons/io5";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminDashBoard = () => {
  const [bioData] = useBioData();
  const [premiumMember] = usePremium();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);

  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = stats.map((data) => {
    return { name: data.total, value: data.total };
  });

  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="border w-44 h-32 flex text-2xl font-bold bg-pink-200 p-2 rounded-2xl">
          <div className="mr-2 mt-2">
            <IoPeopleSharp />
          </div>
          <h1>Total users: {stats?.[0]?.total}</h1>
        </div>
        <div className="border w-44 h-32 flex text-2xl font-bold bg-purple-500 p-2 rounded-2xl">
          <div className="mr-2 mt-2">
            <IoPeopleSharp />
          </div>
          <h1>Premium member: {stats?.[1]?.total}</h1>
        </div>
        <div className="border w-44 h-32 flex text-2xl font-bold bg-sky-400 p-2 rounded-2xl">
          <div className="mr-2 mt-2">
            <IoPeopleSharp />
          </div>
          <h1>Male biodata: 11</h1>
        </div>
        <div className="border w-44 h-32 flex text-2xl font-bold bg-cyan-400 p-2 rounded-2xl">
          <div className="mr-2 mt-2">
            <IoPeopleSharp />
          </div>
          <h1>Female biodata: 10</h1>
        </div>
        <div className="border w-44 h-32 flex text-2xl font-bold bg-yellow-300 p-2 rounded-2xl">
          {/* <h1>Total Revenue: ${stats}</h1> */}
          <div className="mr-2 mt-2">
            <LuCircleDollarSign />
          </div>
          <h1>Total Revenue: {stats?.[2]?.total}$</h1>
        </div>
      </div>
      <div className="flex mt-10">
        <div>
          <BarChart
            width={500}
            height={300}
            data={stats}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {stats?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div>
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
