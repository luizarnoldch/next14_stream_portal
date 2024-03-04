"use client";
import { Button } from "keep-react";
import InputText from "./InputText";
import Link from "next/link";
import GoogleButton from "./GoogleButton";

type Props = {
}

const Form = ({}: Props) => {
  return (
    <div className='w-96 bg-orange-100 flex flex-col items-center py-8 gap-8 rounded-lg'>
        <p className="text-lg font-semibold">Inicio de Sesión</p>
        <InputText 
            className=""
            htmlFor="#usuario"
            label="usuario"
            placeholder="usuario"
        />
        <InputText 
            className=""
            htmlFor="#contraseña"
            label="contraseña"
            placeholder="contraseña"
        />

        <Button type="primary" size="md">
            Iniciar Sesión
        </Button>

        <hr className=" border-t-2 border-black w-1/2" />
        <GoogleButton />
        <hr className=" border-t-2 border-black w-1/2" />
        
        <Link href="/sign-up" className="underline ">
              ¿Desea Registrate?
        </Link>
    </div>
  )
}

export default Form