import React, { useEffect, useRef } from "react";

interface Props {
  color1?: string;
  color2?: string;
  height?: string;
  position?: React.CSSProperties["position"];
}

export function ProgressBar({ color1, color2, position, height }: Props) {
  const progressBar_ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const page = document.documentElement; //element HTML
    let totalHeight = page.scrollHeight; //Height Total of page
    let visibleHeight = page.clientHeight; //Height visible
    let scrolling = page.scrollTop; //size of scroll
    let max = totalHeight - visibleHeight;
    progressBar_ref.current!.style.width = Math.floor((scrolling / max) * 100) + "%"; //width in %
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Defaults values
  const positions : React.CSSProperties["position"][] = ["fixed", "absolute", "relative", "sticky","static"];
  color1 = typeof color1 === "string" ? color1 : "#808080";
  color2 = typeof color2 === "string" ? color2 : "#ffd700";
  height = typeof height === "string" ? height : "4px";
  position = !positions.includes(position) ? "fixed" : position;

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      position,
      height,
      backgroundColor: color1,
      zIndex: "999",
      width: "100%",
      top: "0",
      left: "0",
    },

    progressBar: {
      backgroundColor: color2,
      transition: "all 0.5s ease-out",
      width: "0%",
      height: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.progressBar} ref={progressBar_ref}></div>
    </div>
  );
}
