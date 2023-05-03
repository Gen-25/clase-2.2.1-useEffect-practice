import { useState, useEffect } from "react";
import UserAdmin from "./components/UserAdmin";
import MouseTracker from "./components/MouseTracker";

import "./App.css";

/*
    EFECTOS
    Son procesos (funciones) de sincronización con servicios externos a React pero dependen de los datos de la aplicación de React, y se ejecutan despues de que la renderización.

    Son instrucciones que conectan con servicios externos (API del navegador, conexión web sockets, peticiones http, manejo de widgets de terceros) y se ejecutan despues de una renderización.

    PASOS PARA CREAR UN EFECTO
    1. Declara el efecto, que se logra mediante el hook useEffect
    2. Especificar la dependencias del efecto
    3. Agregar una función de limpieza si es necesario

    Ciclo de vida componentes
    1. Mount -> Aparece por primera vez en la pantalla
    2. Update -> Cuando cambia una variable de estado o las props
    3. Unmount -> Desaparece de la pantalla
*/

function App() {
  /*
    1. ¿Necesito un dato ante el cual reaccione la aplicación? -> Variable de estado (useState)
    2. ¿Necesito llevar logica ante la interacción del usuario? -> Evento
    3. ¿Necesito conectar el estado de mi aplicación con un servicio externo antes las distintas renderizaciones? -> useEffect
  */

  const [isUserAdminVisible, setIsUserAdminVisible] = useState(false);
  const [isMouseTrackerVisible, setIsMouseTrackerVisible] = useState(false);

  return (
    <>
      <h1>Efectos en React</h1>
      <button onClick={() => setIsUserAdminVisible(!isUserAdminVisible)}>
        {isUserAdminVisible ? "Ocultar" : "Mostrar"} User Admin
      </button>
      <button onClick={() => setIsMouseTrackerVisible(!isMouseTrackerVisible)}>
        {isMouseTrackerVisible ? "Ocultar" : "Mostrar"} Mouse Tracker
      </button>

      {isUserAdminVisible && <UserAdmin />}
      {isMouseTrackerVisible && <MouseTracker />}
    </>
  );
}

export default App;
