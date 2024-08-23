import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';
import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from './actionTypes';
import {onAuthStateChanged} from 'firebase/auth';

export const signUp = (email, password, displayName, photo) => async dispatch => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    let photoURL = '';
    if (photo) {
      const storageRef = ref(storage, `userPhotos/${user.uid}`);
      await uploadBytes(storageRef, photo);
      photoURL = await getDownloadURL(storageRef);
    }

    await updateProfile(user, { displayName, photoURL });
    await setDoc(doc(db, 'users', user.uid), {
      displayName,
      photoURL,
      email,
      createdAt: new Date()
    });

    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        ...user,
        photoURL
      }
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: error.message
    });
  }
};

export const logIn = (email, password) => async dispatch => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        ...user,
        photoURL: user.photoURL
      }
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: error.message
    });
  }
};

export const logOut = () => async dispatch => {
  try {
    await signOut(auth);
    dispatch({
      type: AUTH_LOGOUT
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: error.message
    });
  }
};

export const authStateChanged = () => dispatch => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          ...user,
          photoURL: user.photoURL
        }
      });
    } else {
      dispatch({
        type: AUTH_LOGOUT
      });
    }
  });
};
