import { Api } from "../../Services/api";

export function setUserLocalStorage(user) {
  localStorage.setItem("u", JSON.stringify(user)); //'u' is user
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email, password) {
  try {
    const request = await Api.post("login", { email, password });

    return request.data;
  } catch (error) {
    return null;
  }
}
