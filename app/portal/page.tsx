import Message from "./_components/Message"

type Props = {}

const Portal = (props: Props) => {
  return (
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center flex-col'>
        <div>
            Portal
        </div>
        <Message />
    </div>
  )
}

export default Portal