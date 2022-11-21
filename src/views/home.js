import React, { useEffect, useState } from "react";
import Table from "../components/table";
import { tableData } from "../data/index";
import "./home.css";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch(
    //   "https://prototype.sbulltech.com/api/v2/instruments"
    // ).then((response) => console.log(response));
    // .then((data) => console.log(data));
    setData(tableData);
  }, []);
  return (
    <>
      <h1>Home page </h1>
      <br />
      <div className="container">
        <Table data={data} />
      </div>
    </>
  );
}
