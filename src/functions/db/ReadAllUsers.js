import {db} from '../../firebase/credenciales';
import {collection, getDocs} from 'firebase/firestore';

export default async function ReadAllUsers(){
    try{
        const collectionRef = collection(db, "usuarios");
        const querySnapshot = await getDocs(collectionRef);
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.data());
        // });
        return querySnapshot;

    }catch(error){
        console.log(error);
    }
}