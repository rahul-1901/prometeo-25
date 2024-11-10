import { useEffect, useState } from "react";
import "./Go2Top.css";
import { GoMoveToTop } from "react-icons/go";

const Go2Top = () => {
  const handleGo2Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div id="go-to-top-button" onClick={handleGo2Top}>
        <GoMoveToTop />
      </div>
    </>
  );
};

export default Go2Top;
