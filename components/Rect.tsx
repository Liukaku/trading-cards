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
    if (what != null) {
      what.style.transition = "";
      what.style.transform = `rotateY(${minus()}deg) rotateX(${roundedX}deg)`;
    }
  };

  const goodbye = () => {
    const what = document.getElementById("rect");
    if (what != null) {
      what.style.transition = "ease-in-out 1s";
      // what.style.boxShadow = "0 0 30px -5px";
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
    >
      <img
        src="https://i.imgur.com/pIEEBcZ.jpeg"
        style={{
          width: "100%",
          display: "block",
          position: "absolute",
          objectFit: "cover",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundImage:
            "url(https://poke-holo.simey.me/img/illusion.png), linear-gradient(#ff7575eb 33%, #f9f996c4 66%, #7fd77fc9 100%)",
          backgroundBlendMode: "exclusion, hue, hard-light",
          filter:
            "brightness(calc((var(--hyp)*0.3) + 0.5)) contrast(2) saturate(1.5)",
          width: "300px",
          height: "400px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 1,
          position: "absolute",
          mixBlendMode: "color-dodge",
        }}
      ></div>
    </div>
  );
};

export default Rect;
