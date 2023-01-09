import React from "react";

const Rect = () => {
  const hoverFunc = (e: React.PointerEvent<HTMLDivElement>) => {
    const targ = e.target as HTMLElement;
    const rect = targ.getBoundingClientRect();
    const what = document.getElementById("rect");

    const absolute = {
      x: e.clientX - rect.left, // get mouse position from left
      y: e.clientY - rect.top, // get mouse position from right
    };
    const percent = {
      x: Math.floor((100 / rect.width) * absolute.x),
      y: Math.floor((100 / rect.height) * absolute.y),
    };
    const center = {
      x: percent.x - 50,
      y: percent.y - 50,
    };

    const roundedX = Math.floor(center.y / 2);
    const roundedY = Math.floor(center.x / 2);

    const minus = () => {
      if (roundedY < 0) {
        return Math.abs(roundedY);
      } else {
        return -roundedY;
      }
    };
    const rounded = {
      x: Math.floor(-(center.x / 3.5)),
    };
    if (what != null) {
      what.style.transition = "";
      what.style.transform = `rotateY(${minus()}deg) rotateX(${roundedX}deg)`;
    }
  };

  const goodbye = () => {
    const what = document.getElementById("rect");
    if (what != null) {
      what.style.transition = "ease-in-out 1s";
      what.style.transform = "";
    }
  };

  return (
    <div
      id="rect"
      onPointerMove={(e) => hoverFunc(e)}
      onMouseLeave={() => goodbye()}
      style={{
        background: "url(https://i.imgur.com/pIEEBcZ.jpeg)",
        width: "300px",
        height: "400px",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Rect;
