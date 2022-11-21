import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

export default function Table({ data }) {
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const columns = [
    {
      name: "Symbol",
      label: "Symbol",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "Name",
      label: "Name",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "Sector",
      label: "Sector",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "Validtill",
      label: "Validtill",
      options: {
        filter: true,
        sort: false
      }
    }
  ];

  const options = {
    search: true,
    download: true,
    print: false,
    filter: true,
    selectableRows: false,
    filterType: "dropdown",
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };
  return (
    <>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"Stocks page"}
            columns={columns}
            data={data}
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
