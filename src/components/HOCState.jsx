import React from "react";
import withFilteerHOC from "./HOCFilteer";
import { cities } from "../assets/dataList";
const HOCState = (props) => {
  return (
    <center>
      <div>
        {props.filteredList && props.filteredList.map((item) => <p>{item}</p>)}
      </div>
    </center>
  );
};

export default withFilteerHOC(HOCState, cities);
