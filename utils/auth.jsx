import { useState, useContext, createContext } from 'react'

import firebaseApp from '../firebase/credentials';

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc } from "firebase/firestore"

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

const sessionContext = createContext()


// EXPERIMENTAR: aparentemente se puede eliminar sin problema, no funciona de momento coo
// metodo para compartir globalmente el user state
export function SessionContext({children}){
	const auth = useProvideAuth()
	return <sessionContext.Provider value={auth}>{children}</sessionContext.Provider>
}

export const useAuth = () => {
	return useContext(sessionContext)
}

function useProvideAuth(){
	const [user, setUser] = useState(null)

	async function getRole(uid) {
		const docuRef = doc(firestore, `/users/${uid}`)
		const encodedDoc = await getDoc(docuRef)
		const finalData = encodedDoc.data().rol
		return finalData
	}

	const setUserWithFirebaseAndRole = (firebaseUser) => {
		getRole(firebaseUser.uid).then((role) => {
			const userData = {
				uid: firebaseUser.uid,
				email: firebaseUser.email,
				role: role
			}
			setUser(userData)
			console.log(userData)
		}).catch((e) => console.log(e))
	}

	onAuthStateChanged(auth, (firebaseUser) => {
		if (firebaseUser) {

			if (!user) {
				setUserWithFirebaseAndRole(firebaseUser)
			}
		} else {
			setUser(null)
		}
	})
}