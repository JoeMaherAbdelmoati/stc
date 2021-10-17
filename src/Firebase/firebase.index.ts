import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLG50DuWO10H1addSyLQTUh2hJ4HClRdY",
  authDomain: "stc-task-2bb8b.firebaseapp.com",
  projectId: "stc-task-2bb8b",
  databaseURL: "https://stc-task-2bb8b.firebaseio.com",
  storageBucket: "stc-task-2bb8b.appspot.com",
  messagingSenderId: "245441825412",
  appId: "1:245441825412:web:9e16fbbe8c117618b390d1",
  measurementId: "G-W22HTSS2T3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const createDocument = (collectionName: string, data: any) => {
  return addDoc(collection(db, collectionName), data);
};
const uploadImage = (directory: string, file: any) => {
  const storage = getStorage();
  const storageRef = ref(storage, `${directory}/${Date.now().toString()}`);

  return uploadBytes(storageRef, file).then(snapshot => {
    return getDownloadURL(snapshot.ref).then(downloadURL => downloadURL);
  });
};
const getData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result: any = [];
  querySnapshot.forEach(doc => {
    result.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return result;
};
const exportedObject = {
  createDocument,
  uploadImage,
  getData
};
export default exportedObject;
