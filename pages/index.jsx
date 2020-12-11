import Layout from "../components/Layout";
import { Card, HStats, PStats } from "../components/styled";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Card className=" mx-10 md:w-1/4 ">
          <h1 className="text-2xl">! Bienvenido Chilis !</h1>
        </Card>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 ">
        <Card className="m-10">
          <HStats># De clientes en el restuarante:</HStats>
          <PStats>15</PStats>
        </Card>
        <Card className="m-10">
          <HStats># De clientes en el día:</HStats>
          <PStats>15</PStats>
        </Card>
        <Card className="m-10">
          <HStats># De clientes en la semana:</HStats>
          <PStats>15</PStats>
        </Card>
        <Card className="m-10">
          <HStats># De cleintes al mes:</HStats>
          <PStats>15</PStats>
        </Card>
      </div>
      <Card className="h-2/3 mx-10 p-40 ">
        <img src="/chilis1.jpeg" className="h-full mx-auto" />
      </Card>
    </Layout>
  );
}
