import {db} from '../../firebase/credenciales';
import { collection, doc, setDoc } from 'firebase/firestore';

export default async function CreateUser(id, pendiente){
    try{
        await setDoc(doc(db, "usuarios", id), pendiente);
    }catch(error){
        console.log(error);
    }
}



