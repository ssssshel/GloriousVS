import {getAuth, updatePassword} from 'firebase/auth'
import firebaseApp from '../firebase/credentials'


export default function handleUpdatePassword(newPassword){
    const auth = getAuth(firebaseApp)    
    const user = auth.currentUser

    updatePassword(user, newPassword).then(()=> window.alert('Se actualizó la ccontraseña')).catch((error) => window.alert(error))
}