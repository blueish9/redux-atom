import taskData from "./data/taskData";
import categoryData from "./data/categoryData";

const data = {
  '/task': taskData,
  '/category': categoryData
};

export default function requestApi(api) {
  return data[api];
}