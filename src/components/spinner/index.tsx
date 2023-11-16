"use client";

import React from "react";
import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ProgressBar
      height={"120"}
      width={"120"}
      ariaLabel="Common Loader"
      borderColor="#000000"
      barColor="#ffffff"
      wrapperStyle={{ display: "block", margin: "auto" }}
    />
  );
}
