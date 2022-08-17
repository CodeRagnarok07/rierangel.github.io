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

      <div className='group relative w-full h-[30%]  center overflow-hidden border-b border-t border-1 border-b-gray-700 border-t-gray-400'>
        <div className='absolute  top-0 bottom-0 right-0 left-0
                        flex items-center justify-around 
                        bg-black text-white
                        bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:brightness-100'>

          {/* <a className="px-6 py-2 bg-gray-900 text-gray-200 border rounded group-hover:bg-gray-800"
                                href={e.gitHub} target="__blank" >GitHub</a> */}

          <a className="hover:cursor-pointer px-6 py-2 text-xl w-[150px] center bg-gray-300 text-white rounded group-hover:bg-transparent border border-white"
            href={obj.live} target="__blank">
            ver
          </a>
        </div>
        <img src={obj.img} alt={obj.name} />
      </div>

      <div className='w-[70%] mx-auto'>
        <h1 className=''>{obj.name}</h1>

        <article dangerouslySetInnerHTML={{ __html: obj.description }}></article>

      </div>



    </div>
  )
}
