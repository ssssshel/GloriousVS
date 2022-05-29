import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import HeadLayout from "../../../components/Head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PersonalData from "../../../components/user/PersonalData";
import UserPassword from "../../../components/user/Password";
import Address from "../../../components/user/Address";
import LoadingScreen from "../../../components/alerts/Loading";
import ErrorScreen from "../../../components/alerts/Error"
import PrivateRoute from "../../../components/alerts/Private";
import { connectDb } from "../../../lib/connectDb";
import Client from "../../../models/Client";
import { useAuth } from "../../../utils/auth";


export default function ClientProfile({success, error, userData}){
  const router = useRouter()

  // TESTEAR STATE
  let [userOption, setUserOption] = useState(1);
  console.log(userOption);
  
  if(error){
    return <ErrorScreen error={error}/>
  }

  if (!success) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <HeadLayout section={`userName`} />
      <Navbar />
      <div className="flex flex-col w-full h-screen px-40 py-20 gap-11 bg-ivory">
        <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
          <p className="text-3xl font-Pacifico text-charleston">Hola {userData.name}</p>
        </div>
        <div className="grid grid-cols-10 grid-rows-1">
          <div className="flex flex-col col-start-1 col-end-5 gap-5">
            <div
              onClick={() => setUserOption((userOption = 1))}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Datos personales</p>
              <p>{">"} </p>
            </div>
            <div
              onClick={() => setUserOption((userOption = 2))}
              className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal"
            >
              <p>Cambiar contraseña</p>
              <p>{">"} </p>
            </div>
            <div onClick={() => router.push('/client/userId/history')} className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal">
              <p>Mis compras</p>
              <p>{">"} </p>
            </div>
            <div
            onClick={() => setUserOption(userOption = 3)}
            className="flex flex-row items-center justify-between w-full h-20 px-6 text-2xl shadow-xl cursor-pointer hover:bg-cornsilk font-Pacifico text-charleston rounded-2xl bg-teal">
              <p>Direcciones de envío</p>
              <p>{">"} </p>
            </div>
          </div>
          {/* here goes components */}
          {
            userOption == 1 ?(
              <PersonalData name={userData.name} surname={userData.surname} email={userData.email}/>
            ): userOption == 2 ? (
              <UserPassword />
            ): userOption == 3 ? (
              <Address />
            ):(
              <div>null</div>
            )
          }
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticProps({params}){
  await connectDb()
  const {id} = params
  
  try {
    const userData =  await Client.findOne({userId: id}).lean()
    if(!userData){
      return{
        props:{
          success: false,
          error: "Código de cliente inválido"
        }
      }
    }
    userData._id = `${userData._id}`

    
    return{
      props:{
        success:true,
        userData
      }
    }
  } catch (error) {
    return {
      props:{
        success: false,
        error: "Error del servidor"
      }
    }
  }
}

export async function getStaticPaths(){
  return{
    paths: [],
    fallback: true
  }
}