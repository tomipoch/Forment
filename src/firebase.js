import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

const addUser = async (data) => {
  try {
    console.log('Intentando añadir un documento a Firestore', data);
    const docRef = await addDoc(collection(db, 'users'), data);
    console.log('Documento añadido con ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error añadiendo el documento: ", error);
    throw error;
  }
};

const getUsers = async () => {
  try {
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error("Error obteniendo documentos: ", error);
    throw error;
  }
};

const updateUser = async (id, data) => {
  try {
    const docRef = doc(db, 'users', id);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error("Error actualizando el documento: ", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const docRef = doc(db, 'users', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error eliminando el documento: ", error);
    throw error;
  }
};

const uploadFile = async (file, folderName) => {
  const storageRef = ref(storage, `${folderName}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Progreso de subida del archivo: ${progress}%`);
      },
      (error) => {
        console.error("Error subiendo el archivo: ", error);
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('Archivo subido con URL: ', downloadURL);
          resolve(downloadURL);
        } catch (error) {
          console.error("Error obteniendo la URL de descarga: ", error);
          reject(error);
        }
      }
    );
  });
};

export { db, storage, addUser, getUsers, updateUser, deleteUser, uploadFile, auth };
