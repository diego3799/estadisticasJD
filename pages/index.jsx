import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Card, HStats, PStats } from "../components/styled";

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
      <Card className="w-1/4 text-center mt-10 ml-10">
        <h1 className="text-2xl">! Bienvenido Chilis !</h1>
      </Card>
      <div className="flex justify-evenly text-center flex-wrap">
        <Card className="m-10">
          <HStats># De cliente en el restuarante:</HStats>
          <PStats>15</PStats>
        </Card>
        <Card className="m-10">
          <HStats># De cliente en el día:</HStats>
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
      <Card className="h-2/3 mx-10 ">
        
      </Card>
    </Layout>
  );
}
