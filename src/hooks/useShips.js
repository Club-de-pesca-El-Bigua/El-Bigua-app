import axios from "axios";

export const api = axios.create({
 baseURL: "https://65fbd2a514650eb2100ab60f.mockapi.io/ships",
 //baseURL: "http://localhost:3000/api",
});

async function getShips() {
  const { data } = await api.get("/ships");
  console.log(data)
  return data;
}

export default getShips;


// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:3000/api/ship",
// });

// async function getShips() {
//   try {
//     const response = await api.get("");
//     return response.data;
//   } catch (error) {
//     console.error("Error al obtener los barcos:", error);
//     throw error; // Re-lanzar el error para manejarlo en el componente que llama a getShips
//   }
// }

// export default getShips;