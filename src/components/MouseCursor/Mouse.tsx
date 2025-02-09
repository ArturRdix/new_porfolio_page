import { useEffect } from "react";

export default function MatrixCursor() {
  useEffect(() => {
    const symbols = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    const colors = ['#00ff88', '#b9ebff', '#60c3f5'];
    let lastSpawn = 0;
    
    const handleMouseMove = (e:any) => {
      const now = Date.now();
      if (now - lastSpawn < 50) return;
      lastSpawn = now;
      
      const symbol = document.createElement("span");
      symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      symbol.style.position = "absolute";
      symbol.style.left = `${e.clientX}px`;
      symbol.style.top = `${e.clientY}px`;
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      symbol.style.color = randomColor;
      symbol.style.fontSize = "25px";
      symbol.style.fontFamily = "monospace";
      symbol.style.opacity = "1";
      symbol.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
      symbol.style.pointerEvents = "none";
    //   symbol.style.textShadow = `0 0 5px ${randomColor}, 0 0 10px ${randomColor}`;
      document.body.appendChild(symbol);
      
      setTimeout(() => {
        symbol.style.opacity = "0";
        symbol.style.transform = "translateY(10px)";
        setTimeout(() => symbol.remove(), 500);
      }, 50);
    };
    
    document.body.style.cursor = "default";
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
