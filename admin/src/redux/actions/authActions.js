// src/redux/actions/authActions.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from './actionType';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const signUp = (email, password, displayName, photoURL) => async dispatch => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName, photoURL });

    await setDoc(doc(db, 'users', user.uid), {
      profileName: displayName,
      profilePic: photoURL,
      email: user.email,
      createdAt: new Date()
    });

    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        ...user,
        photoURL // Ensure photoURL is included in the payload
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
        photoURL: user.photoURL // Ensure photoURL is included in the payload
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


// Action to check authentication state
export const checkAuthState = () => dispatch => {
  onAuthStateChanged(auth, user => {
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

