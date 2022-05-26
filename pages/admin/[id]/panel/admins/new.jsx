import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";
import PrivateRoute from "../../../components/alerts/Private";

import { useAuth } from "../../../utils/auth";

const NewAdminForm = () => {

	const user = useAuth()

	if (!user || user.hasPrivileges != true) {
		return <PrivateRoute />
	}

	return (
		<div>
			<HeadLayout section={"Crear nuevo administrador"}/>
			<Navbar />
		</div>
	);
}

export default NewAdminForm;