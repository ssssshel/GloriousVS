// AUTH es un wrapper que exporta un hook de contexto que a su vez representa el objeto 
// user junto a sus propiedades {uid, email, role}. Esto con el fin de que el contexto de
// sesión de usuario sea global y por tanto accesible para todos los componentes y secciones
// de la aplicación web 

import { useState, useContext, createContext, useEffect } from 'react'

import firebaseApp from '../firebase/credentials';

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/router"

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

const sessionContext = createContext()

// wrapper 
export function SessionContext({ children }) {
	const auth = useProvideAuth()
	return <sessionContext.Provider value={auth}>{children}</sessionContext.Provider>
}

// context
export const useAuth = () => {
	return useContext(sessionContext)
}

// context functions
function useProvideAuth() {
	const router = useRouter()
	const [user, setUser] = useState(null)

	async function getRole(uid) {
		const docuRef = doc(firestore, `/users/${uid}`)
		const encodedDoc = await getDoc(docuRef)
		const finalData = encodedDoc.data().rol
		return finalData
	}

	const setUserWithFirebaseAndRole = (firebaseUser) => {
		getRole(firebaseUser.uid).then((role) => {
			let userData = {}
			if (role === "admin" || role === "editor") {
				userData = {
					uid: firebaseUser.uid,
					email: firebaseUser.email,
					role: role,
					hasPrivileges: true
				}
			}else{
				userData = {
					uid: firebaseUser.uid,
					email: firebaseUser.email,
					role: role,
				}

			}

			setUser(userData)
			console.log(userData.role)
		}).catch((e) => console.log(e))
	}

	// se emplea el hook useEffect con el fin de actualizar el estado user cada vez que
	// la app  se renderiza
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			if (firebaseUser) {
				if (!user) {
					setUserWithFirebaseAndRole(firebaseUser)
				}
				// setUser(firebaseUser)
			} else {
				setUser(null)
			}
		})
		console.log(`Usuario: ${user}`)
		return () => unsubscribe()
	})

	// useEffect(() => {

	// 	const url = router.pathname


	// 	const routeBlocker = () => {
	// 		if (!user || (user.role != "admin" || user.role != "editor")) {
	// 			if (url.includes("admin")) {

	// 			}
	// 		}
	// 	}

	// 	return () => routeBlocker()
	// })

	return user
}