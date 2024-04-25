import {auth} from "../../firebase/credenciales";
import {signOut} from "firebase/auth";

export default async function logout(){
    try{
        const user = await signOut(auth);
        console.log(user);
    }catch(error){
        console.log(error);
    }
}