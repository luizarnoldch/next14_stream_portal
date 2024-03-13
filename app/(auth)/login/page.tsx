import { formAction } from "@/actions/sign-in";
import { headers } from "next/headers";

type Props = {};

const SignIn = (props: Props) => {

  const headersList = headers()
  const token = headersList.get('Authorization')
  const fetchHeaders: HeadersInit = {};
  if (token) {
    fetchHeaders['Authorization'] = token;
  }

  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <form action={formAction} className="w-96 bg-orange-100 flex flex-col items-center py-8 gap-8 rounded-lg">
        <p className="text-lg font-semibold">Inicio de Sesión</p>
        <label htmlFor="usuario">Usuario</label>
        <input className="" placeholder="usuario" name="user" />
        <label htmlFor="contraseña">Contraseña</label>
        <input className="" placeholder="contraseña" name="password" />
        <input type="hidden" className="" placeholder="contraseña" name="token" value={fetchHeaders['Authorization']} />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-300 rounded-lg hover:bg-blue-400 active:bg-blue-600 text-white"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default SignIn;
