import {
  FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
  LOADING
} from './actionType';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs, query, where } from 'firebase/firestore';
import generateUniqueId from 'generate-unique-id';

export const addProduct = (data, file) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const uniqueId = generateUniqueId({ length: 4, useLetters: false });
      const storageRef = ref(storage, `images/${uniqueId}-${file.name}`);
      await uploadBytes(storageRef, file);
      const fileURL = await getDownloadURL(storageRef);

      const updatedData = {
        ...data,
        id: uniqueId,
        imageUrl: fileURL,
        createdAt: new Date()
      };

      const productRef = collection(db, 'products');
      await addDoc(productRef, updatedData);
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: updatedData });
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_FAILURE, payload: 'Error adding product' });
    }
  };
};

export const fetchProducts = (category = '') => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const productRef = collection(db, 'products');
      let q;
      if (category) {
        q = query(productRef, where('category', '==', category));
      } else {
        q = query(productRef);
      }
      const productSnapshot = await getDocs(q);
      const productsList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Fetched Products: ", productsList);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: productsList });
    } catch (error) {
      console.error('Error fetching products:', error);
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: 'Error fetching products' });
    }
  };
};

export const fetchProductById = (productId) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const productRef = doc(db, 'products', productId);
      const productSnapshot = await getDoc(productRef);
      const productData = productSnapshot.data();
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: [{ id: productId, ...productData }] });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: 'Error fetching product' });
    }
  };
};

export const updateProduct = (productId, updatedData, file) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      if (file) {
        const storageRef = ref(storage, `images/${productId}-${file.name}`);
        await uploadBytes(storageRef, file);
        const fileURL = await getDownloadURL(storageRef);
        updatedData.imageUrl = fileURL;
      }

      const productRef = doc(db, 'products', productId);
      await updateDoc(productRef, updatedData);

      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: { id: productId, ...updatedData } });
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: 'Error updating product' });
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const productRef = doc(db, 'products', productId);
      await deleteDoc(productRef);

      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
    } catch (error) {
      dispatch({ type: DELETE_PRODUCT_FAILURE, payload: 'Error deleting product' });
    }
  };
};
