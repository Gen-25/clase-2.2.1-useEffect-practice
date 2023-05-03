import { useEffect, useState } from "react";

const MouseTracker = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handlerMouseMove = (e) => {
    setCoordinates({ x: e.pageX, y: e.pageY });
    console.log(`Mouse position is at x = ${e.pageX}, y = ${e.pageY}`);
  };

  // Por defecto un efecto se ejecuta despues de cada renderización
  useEffect(() => {
    document.addEventListener("mousemove", handlerMouseMove);

    return () => {
      document.removeEventListener("mousemove", handlerMouseMove);
    };
  }, []);

  /* Ejercicio practica
    Crear un componente que funcione como reloj, debe tener un boton para detenerlo e iniciarlo.
    
    Pista: usar la api de Javascript para planificar la ejecución de una función en x milisegundos.

    - setTimeout() -> clearTimeout()
    - setInterval() -> clearInterval()
  */

  return (
    <>
      <h2>Mouse Tracker</h2>
      <p>
        Mouse position is at: x = <mark>{coordinates.x} px</mark>, y ={" "}
        <mark>{coordinates.y} px</mark>
      </p>
    </>
  );
};

export default MouseTracker;
