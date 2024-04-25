import { setDoc, collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/credenciales"

//agragr comentarios a firebase
export default async function CrearComentarios(id, comentario, correo) {
    try {

        await setDoc(doc(collection(db, "comentarios")), {
            id,
            comentario,
            correo
        });
        return "Comentario agregado";

        
    } catch (error) {
        console.log(error);
    }
}
