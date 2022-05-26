import HeadLayout from "../../../../../components/Head";
import Navbar from "../../../../../components/Navbar";
import PrivateRoute from "../../../components/alerts/Private";

import { useAuth } from "../../../utils/auth";

const AdminsPanel = () => {

  const user = useAuth()

	if (!user || user.hasPrivileges != true) {
		return <PrivateRoute />
	}

  return (
    <div>
      <HeadLayout section={"Panel de administradores"} />
      <Navbar />
      <div className="flex flex-col w-full min-h-screen gap-6 px-10 py-20 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
          <p className="text-3xl font-Pacifico text-charleston">
            Panel de administradores
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-6 py-4 shadow-xl bg-cornsilk rounded-xl">
            <p className="text-lg font-Comfortaa text-charleston">
              Angel Arteaga
            </p>
            <div className="text-sm">
              <p className="cursor-pointer">Remover</p>
              <p className="cursor-pointer">Descender a moderador</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminsPanel;
