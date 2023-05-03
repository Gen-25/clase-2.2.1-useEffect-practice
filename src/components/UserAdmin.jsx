import { useState, useEffect } from "react";

const connectToDb = (user) => {
  console.log(`Conecting ${user} to DB`);
};

const desconnectFromDb = (user) => {
  console.log(`Disconnecting ${user} from DB`);
};

const adminUsers = [
  "Luis Ramirez",
  "Jhonnatan Freire",
  "Eva Gutierrez",
  "Simon El Crack",
];

const getRandomAdmin = () =>
  adminUsers[Math.floor(Math.random() * adminUsers.length)];

const UserAdmin = () => {
  // Click en mostrar/ocultar usuarios
  // Antes -> admin = Eva, areUserVisible = false
  // Nueva -> admin = Eva, areUerVisible = true

  // Click en change admin
  // Antes -> admin = Eva, areUserVisible = true
  // Nueva -> admin = Jhonnatahn, areUserVisible = true
  const [admin, setAdmin] = useState(getRandomAdmin());
  const [areUsersVisible, setAreUsersVisible] = useState(false);

  const changeAdmin = () => {
    let newAdmin = getRandomAdmin();

    while (admin === newAdmin) {
      newAdmin = getRandomAdmin();
    }

    setAdmin(newAdmin);
  };

  // Todos los hooks son funciones
  // Se puede declarar todos los efectos que sean necesarios

  // Los efectos vistos desde el codigo son instrucciones en el cuerpo de un callback
  // Cuando al useEffect solo se le pasa el callback ejecuta efecto despues de cada renderización.
  useEffect(() => {
    // El servicio necesita el estado de React
    connectToDb(admin);

    // Las dependencias son todas aquellas variables de estados y props de las que depende el efecto.
    // React saltara la ejecución del efecto si todas las dependencias tienen el mismo valor que la renderización anterior.

    // 3. La función de limpieza se crea en el retorno del efecto, y esta se ejecuta justo antes del siguiente efecto y una vez más cuando el componente se desmonta.
    return () => {
      desconnectFromDb(admin);
    };
  }, [admin]);

  useEffect(() => {
    console.log("Testeando conexión");

    // Pasar un array vacio como dependencias es diferente a no pasar dependencias.
    // 1. [] -> Array vacio ejecuta el efecto unicamente cuando se monta el componente
    // 2. Sin Array, se ejecuta el efecto despues de cada renderización
  }, []);

  return (
    <>
      <h2>Users admin</h2>
      <p>
        Admin logged like: <mark>{admin}</mark>
      </p>

      <button onClick={() => setAreUsersVisible(!areUsersVisible)}>
        {areUsersVisible ? "Ocultar" : "Mostrar"} usuarios
      </button>

      {areUsersVisible && (
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
        </ul>
      )}

      <button onClick={changeAdmin}>Change admin</button>
    </>
  );
};

export default UserAdmin;
