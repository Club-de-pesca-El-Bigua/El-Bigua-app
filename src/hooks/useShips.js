import axios from "axios";

export const api = axios.create({
  baseURL: "https://65fbd2a514650eb2100ab60f.mockapi.io/ships",
});

async function getShips() {
  const { data } = await api.get("/ships");
  return data;
}

export default getShips;
