import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../config/firestore';

export const LoginAPI = (email: string, password: string) => {
  try {
    const response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

export const RegisterAPI = (email: string, password: string) => {
  try {
    const response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

export const GoogleSignInAPI = () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};

export const onLogout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    return err;
  }
};
