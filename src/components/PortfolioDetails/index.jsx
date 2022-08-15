import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { get } from 'src/lib/fetcher'

export default function Index() {

  let params = useParams();
  const { status, data, error, isFetching } = useQuery(["projects"], async () => get(`/portfolio/${params.type}/${params.id}`));
  const [obj, setObject] = useState()
  useEffect(() => {
    if (!isFetching) {
      setObject(data)
    }

    console.log(data)
  }, [isFetching])


  return (obj &&
    <div className="h-full">

      <div className='relative w-full h-[30%]  center overflow-hidden border-b border-t border-1 border-b-gray-700 border-t-gray-400'>
        <div className='absolute bg-black bg-opacity-30 inset-0'></div>
        <img src={obj.img} alt={obj.name} />
      </div>

      <div className='w-[70%] mx-auto'>
        <h1 className=''>{obj.name}</h1>

        <article dangerouslySetInnerHTML={{ __html: obj.description }}></article>

      </div>



    </div>
  )
}
