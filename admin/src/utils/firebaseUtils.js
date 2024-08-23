// src/utils/firebaseUtils.js
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export const getUserPhotoURL = async (photoPath) => {
  const storage = getStorage();
  const photoRef = ref(storage, photoPath);
  try {
    const url = await getDownloadURL(photoRef);
    return url;
  } catch (error) {
    console.error("Error fetching photo URL: ", error);
    return null;
  }
};
