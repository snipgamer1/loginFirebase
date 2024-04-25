import { FirebaseCodeErrorEnum } from '../../utils/firebase-code-error';

  export default function codeError(code) {
    switch (code) {
      // El correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

      // Contraseña debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy débil';

      // Correo inválido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo inválido';

      // Contraseña incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta';

      // El usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';

      default:
        return 'Error desconocido';
    }
  }