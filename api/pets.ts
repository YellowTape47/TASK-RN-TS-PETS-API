import instense from ".";
import { PetModelProps } from "../app/model/Pets";
const fetchAllPets = async () => {
  const response = await instense.get("/pets");
  return response.data;
};

const createNew = async (id: string, pet: PetModelProps) => {
  const response = await instense.post(`/pets/${id}`, pet);
  return response.data;
};
export { fetchAllPets, createNew };
