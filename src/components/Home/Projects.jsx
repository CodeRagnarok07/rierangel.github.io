import { useEffect, useState } from "react"
import { get } from '../../lib/fetcher'
import displayContent from '../../lib/display'
const Projects = () => {

    
 

    // const data = [
    //     {
    //         name: "Wordbook ",
    //         description: "Asistente de memorización de vocabulario ingles a través de la evaluación de flash-cards con quiz de audio y ortografía y hace uso de algoritmos de repetición espaciada",
    //         gitHub: "https://github.com/RagAndRoll/wordbook",
    //         live: "https://wordbook-ragandroll.vercel.app",
    //         image: "/img/projects/Wordbook.png",
    //         color: "744fc9"
    //     },
    //     {
    //         name: "Clon de Twitter con Django",
    //         description: "Funcionalidades de registros Follow de usuarios y post Tweets",
    //         gitHub: "https://github.com/RagAndRoll/Twitter-Clone-Django",
    //         live: "https://twitter-dj-clone.herokuapp.com/",
    //         image: "/img/projects/twitter_clone.png",
    //         color: "1c9797"
    //     }
    // ]

    const [data, setData] = useState()
    useEffect(() => {
        get('/portfolio/projects/').then(res => {
            setData(res.success)
        })
    }, [])


    return (
        <div className="border-b">
            <h1 className=" py-5 text-center mb-6 underline leading-[4rem] mx-4 ">
                Proyectos
            </h1>

            <div className="w-full mb-16">

                <div className="flex flex-col space-y-24">
                    {data && data.map((e, i) => (
                        <div key={i}
                            className={`flex flex-col md:mx-24 lg:mx-0 justify-around
                         items-center md:px-8 text-center 
                         ${((i / 2) % 1 === 0) === true ? "lg:flex-row lg:text-left" : "lg:flex-row-reverse lg:text-right"}`}
                        >

                            <a href={e.live} rel="noreferrer" target="_blank"
                                className={`w-full lg:w-2/4  flex overflow-hidden shaodw shadow-md rounded-xl shadow-indigo-500`}>
                                <img
                                    src={e.img} width={"2000%"} height={"1000%"} alt={e.name}
                                    className="relative w-full h-full object-center object-cover"
                                />
                            </a>
                            <div className='w-full lg:w-1/3 flex flex-col justify-center space-y-6 '>
                                <div className="mx-4">
                                    <h3 className="text-gray-100 underline-offset-2 underline">
                                        <span aria-hidden="true" className="inset-0 text-center">
                                            {e.name}
                                        </span>
                                    </h3>
                                </div>
                                <div className="mx-auto xl:mx-4 ">
                                    {displayContent(e.description)}
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