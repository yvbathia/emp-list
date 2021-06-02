import React from "react";
import style from "./Dropdown.module.scss";

const Dropdown = ({
  data,
  onChange,
  head,
  selectedValue,
  setSelectedValue,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleOnChange = (e) => {
    setFilteredData(
      data.filter((element) =>
        element
          ?.toLocaleLowerCase()
          .includes(e?.target?.value?.toLocaleLowerCase())
      )
    );
  };
  return (
    <div className={style.dropdown}>
      <span>{head}</span>
      <input
        className={style.selectInput}
        type="text"
        value={selectedValue || ""}
        placeholder="select"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className={style.dropdownList}>
          <input
            type="text"
            placeholder="Type to search"
            onChange={handleOnChange}
          />
          <div
            onClick={() => {
              setSelectedValue(null);
              setIsOpen(false);
              onChange(null);
            }}
          >
            Select
          </div>
          {filteredData.map((element) => (
            <div
              onClick={() => {
                setSelectedValue(element);
                setIsOpen(false);
                onChange(element);
              }}
            >
              {element}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
