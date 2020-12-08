import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Card } from "../components/styled";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log(localStorage.getItem("jwt"));
    if (localStorage.getItem("jwt") === null) {
      router.push("/signin");
    }
  }, []);

  return (
    <Layout>
      <div className="flex justify-between flex-wrap">

      <Card>
        <ResponsiveContainer height={200} width="100%">
          <BarChart
            data={[
              {
                name: "Page A",
                uv: 4000,
                pv: 2400,
              },
              {
                name: "Page B",
                uv: 3000,
                pv: 1398,
              },
              {
                name: "Page C",
                uv: 2000,
                pv: 9800,
              },
              {
                name: "Page D",
                uv: 2780,
                pv: 3908,
              },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <ResponsiveContainer height={260} width="100%">
          <RadialBarChart
            innerRadius="30%"
            outerRadius="100%"
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            data={[
              {
                name: "18-24",
                uv: 31.47,
                pv: 2400,
                fill: "#8884d8",
              },
              {
                name: "25-29",
                uv: 26.69,
                pv: 4567,
                fill: "#83a6ed",
              },
              {
                name: "30-34",
                uv: -15.69,
                pv: 1398,
                fill: "#8dd1e1",
              },
              {
                name: "35-39",
                uv: 8.22,
                pv: 9800,
                fill: "#82ca9d",
              },
              {
                name: "40-49",
                uv: -8.63,
                pv: 3908,
                fill: "#a4de6c",
              },
              {
                name: "50+",
                uv: -2.63,
                pv: 4800,
                fill: "#d0ed57",
              },
              {
                name: "unknow",
                uv: 6.67,
                pv: 4800,
                fill: "#ffc658",
              },
            ]}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#666", position: "insideStart" }}
              background
              clockWise={true}
              dataKey="uv"
            />
            <Tooltip />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="horizontal"
              verticalAlign="middle"
              align="right"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </Card>
      <Card>
        <ScatterChart
          width={730}
          height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter
            name="A school"
            data={[
              {
                x: 100,
                y: 200,
                z: 200,
              },
              {
                x: 120,
                y: 100,
                z: 260,
              },
              {
                x: 170,
                y: 300,
                z: 400,
              },
              {
                x: 140,
                y: 250,
                z: 280,
              },
              {
                x: 150,
                y: 400,
                z: 500,
              },
              {
                x: 110,
                y: 280,
                z: 200,
              },
            ]}
            fill="#8884d8"
          />
        </ScatterChart>
      </Card>
      </div>
    </Layout>
  );
}
