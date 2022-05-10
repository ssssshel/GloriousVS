import { useRouter } from "next/router";

const AlertAdmin = (message, url) => {

    const router = useRouter()

    return ( 
        <div className="z-20 w-screen h-screen bg-ivory ">
            <p>{message}</p>
            <div onClick={() => router.push(url)} className="cursor-pointer bg-charleston hover:bg-teal ">
                <p className="text-ivory">Volver</p>
            </div>
        </div>
     );
}
 
export default AlertAdmin;