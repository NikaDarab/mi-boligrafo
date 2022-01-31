import { createUserWithEmailAndPassword } from "firebase/auth";

export const register = async () => {
  try {
    const user = await createUserWithEmailAndPassword();
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async () => {};

export const logout = async () => {};
