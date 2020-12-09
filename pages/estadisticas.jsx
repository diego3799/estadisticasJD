import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Card } from "../components/styled";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  LineChart,
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

import axios from "../components/axiosconfig";
import { useDispatch, useSelector } from "react-redux";
import { downloadEstadisticasAction } from "../redux/actions/estadisticasAction";
const Estadisticas = () => {
  const {
    ventaProductos,
    volumenProductos,
    ventaCategoria,
    volumenCategoria,
  } = useSelector((state) => state.estadisticas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(downloadEstadisticasAction());
  }, []);
  return (
    <Layout>
      <div className="">
        <Card className="w-full">
          <ResponsiveContainer height={200} width="100%">
            <BarChart data={ventaProductos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <ResponsiveContainer height={260} width="100%">
            <RadialBarChart
              innerRadius="30%"
              outerRadius="100%"
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              data={[]}
              startAngle={360}
              endAngle={0}
            >
              <RadialBar
                minAngle={15}
                label={{ fill: "#666", position: "insideStart" }}
                background
                clockWise={true}
                dataKey="amount"
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
            <XAxis dataKey="name" name="name" />
            <YAxis dataKey="amount" name="amount" />
            {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="A school" data={volumenProductos} fill="#8884d8" />
          </ScatterChart>
        </Card>
        <Card>
          <LineChart
            width={730}
            height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" name="Tipo" />
            <YAxis dataKey="amount" name="Vendidos" />
            {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="A school" data={ventaCategoria} fill="#8884d8" />
          </LineChart>
        </Card>
      </div>
    </Layout>
  );
};

export default Estadisticas;
