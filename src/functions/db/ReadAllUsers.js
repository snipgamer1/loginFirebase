import {db} from '../../firebase/credenciales';
import {collection, getDocs} from 'firebase/firestore';

export default async function ReadAllUsers(){
    try{
        const collectionRef = collection(db, "usuarios");
        const querySnapshot = await getDocs(collectionRef);
        //retornar los datos
        return querySnapshot.docs.map((doc) => {
            //retornar los datos 
            return {
                id: doc.id,
                data: doc.data()
            }
        });
    }catch(error){
        console.log(error);
    }
}
