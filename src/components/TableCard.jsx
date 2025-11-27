import React from "react";

const TableCard = ({ table, onClick }) => {
  const getColor = (status) => {
    switch(status) {
      case "free": return "green";
      case "reserved": return "yellow";
      case "occupied": return "red";
      default: return "gray";
    }
  };

  return (
    <div
      onClick={() => onClick(table)}
      style={{
        width: "80px",
        height: "80px",
        margin: "10px",
        backgroundColor: getColor(table.status),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {table.id}
    </div>
  );
};

export default TableCard;
