import {getAuth, updatePassword} from 'firebase/auth'
import firebaseApp from '../firebase/credentials'

const auth = getAuth(firebaseApp)

const user = auth.currentUser

export default function handleUpdatePassword(newPassword){
    updatePassword(user, newPassword).then(()=> window.alert('Se actualizó la ccontraseña')).catch((error) => window.alert(error))
}