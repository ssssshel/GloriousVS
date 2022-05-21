import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/globals.css'

import { useState } from 'react'
// import firebaseApp from '../firebase/credentials';
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { getFirestore, doc, getDoc } from "firebase/firestore"
import { SessionContext } from "../utils/auth.jsx"

// const auth = getAuth(firebaseApp)
// const firestore = getFirestore(firebaseApp)

function MyApp({ Component, pageProps }) {

	// const [user, setUser] = useState(null)

	// async function getRole(uid) {
	// 	const docuRef = doc(firestore, `/users/${uid}`)
	// 	const encodedDoc = await getDoc(docuRef)
	// 	const finalData = encodedDoc.data().rol
	// 	return finalData
	// }

	// const setUserWithFirebaseAndRole = (firebaseUser) => {
	// 	getRole(firebaseUser.uid).then((role) => {
	// 		const userData = {
	// 			uid: firebaseUser.uid,
	// 			email: firebaseUser.email,
	// 			role: role
	// 		}
	// 		setUser(userData)
	// 		console.log(userData)
	// 	}).catch((e) => console.log(e))
	// }

	// onAuthStateChanged(auth, (firebaseUser) => {
	// 	if (firebaseUser) {

	// 		if (!user) {
	// 			setUserWithFirebaseAndRole(firebaseUser)
	// 		}
	// 	} else {
	// 		setUser(null)
	// 	}
	// })

	return <SessionContext>
		<Component {...pageProps} />

	</SessionContext>


}

export default MyApp
