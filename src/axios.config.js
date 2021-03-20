import axios from "axios";
import { URL_API } from "./config";

const localInstance = axios.create({
  baseURL: URL_API,
  timeout: 120000
});

export { localInstance };
