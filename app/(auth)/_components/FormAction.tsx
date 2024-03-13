
type Props = {}

const FormAction = (props: Props) => {
    return (
        <div className='w-96 bg-orange-100 flex flex-col items-center py-8 gap-8 rounded-lg'>
            <p className="text-lg font-semibold">Inicio de Sesión</p>
            <label htmlFor="usuario">Usuario</label>
            <input
                className=""
                placeholder="usuario"
                value="user"
            />
            <label htmlFor="contraseña">Contraseña</label>
            <input 
                className=""
                placeholder="contraseña"
                value="password"
            />
    
            <button type="submit" className=''>
                Iniciar Sesión
            </button>
        </div>
      )
}

export default FormAction