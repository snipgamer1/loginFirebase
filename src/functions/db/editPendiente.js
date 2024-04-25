import { db } from "../../firebase/credenciales";
import { collection, doc, updateDoc } from "firebase/firestore";

export default async function editPendiente(id, pendiente) {
    try {
        const collectionRef = collection(db, "usuarios");
        const docRef = doc(collectionRef, id);
        await updateDoc(docRef, pendiente);
      
    } catch (error) {
        console.log(error);
    }
}