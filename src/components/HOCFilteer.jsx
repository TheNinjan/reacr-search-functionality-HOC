import { useState } from "react";

const withFilteerHOC = (InputComponent, data) => {
  const OutputComponent = () => {
    const [searchtext, setSearchText] = useState("");
    const [filteredList, setFilteredList] = useState(data);

    const filterFn = (e) => {
      const searchText = e.target.value.toLowerCase();

      const tempFilteredList = data.filter((item) =>
        item.toLowerCase().includes(searchText)
      );

      setFilteredList(tempFilteredList);
      setSearchText(e.target.value);
    };

    return (
      <>
        <center className="color text">
          <input type="text" onChange={(e) => filterFn(e)} />
          <InputComponent filteredList={filteredList} />
        </center>
      </>
    );
  };

  return OutputComponent;
};

export default withFilteerHOC;
