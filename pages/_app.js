import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/globals.css'

import {useState} from 'react'
import firebaseApp from '../firebase/credentials';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(firebaseApp)
// import SessionContext from "../context/sessionContext";


function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(null)

	onAuthStateChanged(auth, (firebaseUser)=> {
		if(firebaseUser){
			setUser(firebaseUser)
		}else{
			setUser(null)
		}
	})

  return <Component {...pageProps} />

}

export default MyApp
