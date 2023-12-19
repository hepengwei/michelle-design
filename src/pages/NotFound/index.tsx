/**
 * 404页
 */
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: "140px",
          lineHeight: "150px",
          fontWeight: 600,
          color: "#4b805a",
        }}
      >
        404
      </span>
      <span
        style={{
          fontSize: "50px",
          lineHeight: "60px",
          fontWeight: 400,
          color: "#ccc",
        }}
      >
        Not Found
      </span>
    </div>
  );
};

export default NotFound;
