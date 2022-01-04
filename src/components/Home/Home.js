import React from "react";
import Main from "./Main.js";
import Headernew from "../Headernew/Headernew.js";

export default function Home() {
  let namePage = "landing";

  return (
    <div>
      <Headernew namePage={namePage} />
      <Main />
    </div>
  );
}
