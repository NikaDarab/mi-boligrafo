import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const register = async (auth, registerEmail, registerPassword) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
};

export const login = async (auth, loginEmail, loginPassword) => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
};

export const logout = async ( auth) => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error.message);
    }
};
