import React from "react";

function Announcement() {
  return (
    <div
      style={{
        height: "30px",
        backgroundColor: "teal",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      Super Deal! Free Shipping on Orders Over $50
    </div>
  );
}

export default Announcement;
