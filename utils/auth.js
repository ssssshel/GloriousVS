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

	// getRole busca el rol asignado a un usuario en firestore para posteriormente
	// devolver su rol y uid que seran utilizados dentro del objeto userData para 
	// compartirse globalmente
	async function getRole(uid) {
		const docuRef = doc(firestore, `/users/${uid}`)
		const encodedDoc = await getDoc(docuRef)
		const role = encodedDoc.get('rol')
		const userId = encodedDoc.get('userId')

		const finalData = { role, userId }
		return finalData
	}

	const setUserWithFirebaseAndRole = (firebaseUser) => {
		getRole(firebaseUser.uid).then(({ role, userId }) => {
			let userData = {}
			switch (role) {
				case "admin":
					userData = {
						uid: firebaseUser.uid,
						userId: userId,
						email: firebaseUser.email,
						role: role,
						hasPrivileges: true,
						isAdmin: true,
					}
					return setUser(userData)

				case "editor":
					userData = {
						uid: firebaseUser.uid,
						userId: userId,
						email: firebaseUser.email,
						role: role,
						hasPrivileges: true,
					}
					return setUser(userData)

				case "user":
					userData = {
						uid: firebaseUser.uid,
						userId: userId,
						email: firebaseUser.email,
						role: role,
					}
					return setUser(userData)

				default:
					userData = null
					return setUser(userData)

			}

			// console.log(userData.role)
		}).catch((e) => console.log(e))
	}

	// se emplea el hook useEffect con el fin de actualizar el estado user cada vez que
	// la app  se renderiza o existe un cambio en el estado
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
		// console.log(`Usuario: ${user}`)
		return () => unsubscribe()
	})

	return user
}