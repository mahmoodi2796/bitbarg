import React from "react";
import "./Direction.css";
import Headericon from "../Home/Headericon";
export default function Direction() {
  const namePage = "Direction";
  return (
    <div className="container-Direction">
      <Headericon namePage={namePage} />
      <div className="title-blue-header">
        <h1 className="title-blue-header-text-2">مسیر بیت برگ</h1>
      </div>
      <div className="container-main-Direction"></div>
    </div>
  );
}
