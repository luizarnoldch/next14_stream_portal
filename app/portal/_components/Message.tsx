import { Suspense } from 'react'
import { headers } from "next/headers";
import Spinner from "./Spinner"

type Props = {}

async function HelloWorldData(){
  const headersList = headers()
  const token = headersList.get('Authorization')

  const fetchHeaders: HeadersInit = {};
  if (token) {
    fetchHeaders['Authorization'] = token;
  }

  const response = await fetch(`https://2qmbeh14gg.execute-api.us-east-1.amazonaws.com/Prod`, {
    headers: fetchHeaders, 
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await response.json();

  return (
    <p className='p-4 bg-black text-white font-semibold'>
        {data.message}
    </p>
  )
}

const Portal = (props: Props) => {
  return (
    <Suspense fallback={<Spinner />}>
      <HelloWorldData />
    </Suspense>
  )
}

export default Portal