import dynamic from 'next/dynamic'
import Spinner from './_components/Spinner'

const Message = dynamic(
  () => import('./_components/Message'),
  { 
    ssr: false,
    loading: () => <Spinner />,
  },
)

type Props = {}

const Portal = (props: Props) => {
  return (
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center flex-col gap-4'>
        <div>
            Portal
        </div>
        <div className='bg-black w-36 h-12 flex justify-center items-center'>
          <Message />
        </div>
    </div>
  )
}

export default Portal