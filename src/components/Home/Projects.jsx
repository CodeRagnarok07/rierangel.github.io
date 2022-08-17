import { useEffect, useState } from "react"
import { get } from 'src/lib/fetcher'
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import slugify from 'src/lib/slugify'

const Projects = () => {

    const { status, data, error, isFetching } = useQuery(["projects"], async ()=> get('/portfolio/projects/'));
    const [obj, setObject] = useState()
    useEffect(() => {
        if(!isFetching){
            setObject(data)
            console.log(data)
        }
    }, [isFetching])


    return (
        <div className="border-b">
            <h1 className=" py-5 text-center mb-6 underline leading-[4rem] mx-4 ">
                Proyectos
            </h1>

            <div className="w-full mb-16">

                <div className="flex flex-col space-y-24">
                    {obj && obj.map((e, i) => (
                        <div key={i}
                            className={`flex flex-col md:mx-24 lg:mx-0 justify-around
                         items-center md:px-8 text-center 
                         ${((i / 2) % 1 === 0) === true ? "lg:flex-row lg:text-left" : "lg:flex-row-reverse lg:text-right"}`}
                        >
                            
                            <Link to={`projects/${slugify(e.name)}~${e.id}/`} rel="noreferrer" 
                                className={`w-full lg:w-2/4  flex overflow-hidden shaodw shadow-md rounded-xl shadow-indigo-500`}>
                                <img
                                    src={e.img} width={"2000%"} height={"1000%"} alt={e.name}
                                    className="relative w-full h-full object-center object-cover"
                                />
                            </Link>
                            <div className='w-full lg:w-1/3 flex flex-col justify-center space-y-6 '>
                                <div className="mx-4">
                                    <h3 className="text-gray-100 underline-offset-2 underline">
                                        <span aria-hidden="true" className="inset-0 text-center">
                                            {e.name}
                                        </span>
                                    </h3>
                                </div>
                                <div className="mx-auto xl:mx-4 ">
                                   {e.intro}
                                </div>
                                <div className="m-2">
                                    <hr />
                                </div>


                                <div className="flex justify-between w-1/2 mx-auto">

                                    {e.gitHub &&
                                        <a className="px-2 py-1 mx-1 bg-gray-900 text-gray-200 border rounded hover:bg-gray-800"
                                            href={e.gitHub} target="__blank" >GitHub</a>
                                    }

                                    {e.live &&
                                        <a className="px-2 py-1 mx-1 bg-gray-200 text-gray-900 border rounded hover:bg-gray-400"
                                            href={e.live} target="__blank">Live</a>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}


export default Projects