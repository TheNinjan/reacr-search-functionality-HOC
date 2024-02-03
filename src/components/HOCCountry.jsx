import React from "react";
import withFilteerHOC from "./HOCFilteer";
import { countries } from "../assets/dataList";

const HOCCountry = (props) => {
  return (
    <center>
      <div>
        {props.filteredList && props.filteredList.map((item) => <p>{item}</p>)}
      </div>
    </center>
  );
};

export default withFilteerHOC(HOCCountry, countries);
