import { db } from "../../../firebase/credenciales";
import { collection, getDocs } from "firebase/firestore";

export default async function LeerTodosComents() {
    try {
        const querySnapshot = await getDocs(collection(db, "comentarios"));
        return querySnapshot.docs.map((doc) => {
            console.log(doc.id, " => ", doc.data());
            return doc.data();
        });
    } catch (error) {
        console.log(error);
    }
}
