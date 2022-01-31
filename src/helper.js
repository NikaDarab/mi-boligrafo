import { createUserWithEmailAndPassword } from "firebase/auth";

export const register = async (createUserWithEmailAndPassword, auth, registerEmail, registerPassword) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async () => {};

export const logout = async () => {};
