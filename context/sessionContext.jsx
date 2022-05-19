import {useState} from 'react'
import firebaseApp from '../firebase/credentials';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(firebaseApp)

function SessionContext({sessionusercontext}) {
	const [user, setUser] = useState(null)

	onAuthStateChanged(auth, (firebaseUser)=> {
		if(firebaseUser){
			setUser(firebaseUser)
		}else{
			setUser(null)
		}
	})

	return ( 
		<div sessionusercontext={user}></div>
     );
}

export default SessionContext;