import { headers } from "next/headers";
import fetcher from "@/lib/fetcher";
type Props = {}

async function HelloWorldData(){
  const headersList = headers()
  const token = headersList.get('Authorization')

  const fetchHeaders: HeadersInit = {};
  if (token) {
    fetchHeaders['Authorization'] = token;
  }

  const url = `https://2qmbeh14gg.execute-api.us-east-1.amazonaws.com/Prod`
  const response = await fetch(url, {
    headers: fetchHeaders, 
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await response.json();

  if (!token) {
    return null
  }

  const info = await fetcher(url, {token: token, method: "GET"})
    return (
      <p className='flex justify-center items-center w-36 h-12 text-white font-semibold'>
          {data.message}
      </p>
    )
}

const Portal = (props: Props) => {
  return (
    <HelloWorldData />
  )
}

export default Portal