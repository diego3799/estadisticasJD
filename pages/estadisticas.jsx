import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Card } from "../components/styled";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
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
      <div className=" container mx-auto pt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h1>Venta de Productos</h1>
            <ResponsiveContainer height={200} width="100%">
              <BarChart data={ventaProductos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#fdc35d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card>
            <h1>Volumen Productos</h1>
            <ResponsiveContainer height={200} width="100%">
              <ResponsiveContainer height={200} width="100%">
                <LineChart data={volumenProductos}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis dataKey="amount" />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="#325871" />
                </LineChart>
              </ResponsiveContainer>
            </ResponsiveContainer>
          </Card>
          <Card>
            <h1>Venta de Categoria</h1>
            <ResponsiveContainer height={200} width="100%">
              <BarChart data={ventaCategoria}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#fdc35d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          <Card>
            <h1>Volumen Categoria</h1>
            <ResponsiveContainer height={200} width="100%">
              <LineChart data={volumenCategoria}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="amount" />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#325871" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
        <div className="flex justify-end mt-10">
          <button className="bg-foodie py-3 px-5 rounded-md text-white font-bold cursor-pointer">Obtener Reportes</button>
        </div>
      </div>
    </Layout>
  );
};

export default Estadisticas;
