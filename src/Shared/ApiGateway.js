import {API_BASE} from "./config";

export default class ApiGateway {
  get = async () => {
    const response = await fetch(`${API_BASE}`);
    return response.json();
  };
  post = async (path, payload) => {
    const response = await fetch(`${API_BASE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  };
}
