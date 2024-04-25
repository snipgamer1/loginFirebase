import { sendEmailVerification, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/credenciales";

export default function verificar() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            sendEmailVerification(user)
                .then(() => {
                    console.log("Email de verificación enviado");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    });
}