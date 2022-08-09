import { useEffect, useState } from "react"
import { get } from "src/lib/fetcher"

const LayoutProjects = () => {

    // const data = [
    //     {
    //       "name": "Portfolio Art",
    //       "live": "https://RierAngel.github.io/Layout/art-portfolio/",
    //       "image": "/img/LayoutProjects/portfolio-art.png",
    //       "gif": "https://www.youtube.com/watch?v=r9Z_ZLnenTs",

    //     },
    //     {
    //       "name": "Tienda online de moda",
    //       "live": "https://RierAngel.github.io/Layout/aismoda/",
    //       "image": "/img/LayoutProjects/aismoda.png",     
    //       "gif": "https://www.youtube.com/watch?v=KP8cfJHBAlQ",
    //     },
    //     {
    //       "name": "Pagina de aterrizaje para aplicación móvil",
    //       "live": "https://RierAngel.github.io/Layout/sellapp/",
    //       "image": "/img/LayoutProjects/sellapp.png",
    //       "gif": "https://www.youtube.com/watch?v=qfT3PDJ6Swg",

    //     },
    //     {
    //       "name": "termoindustria",
    //       "live": "https://RierAngel.github.io/Layout/termoindustria/",
    //       "image": "/img/LayoutProjects/termoindustria.png",
    //       "gif": "https://www.youtube.com/watch?v=r9Z_ZLnenTs",

    //     }
    //   ]

    const [data, setData] = useState()
    useEffect(() => {
        get('/portfolio/works/').then(res => {
            setData(res.success)
        })

    }, [])

    return (
        <div className="border-b pb-5">
            <h1 className="py-5 text-center mb-6 underline leading-[4rem] mx-4 ">
                Proyectos de maquetación
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-[5%] h-[45rem]'>
                {data && data.map((e, i) => (
                    <div key={i} className='relative group overflow-hidden'  >
                        <div style={{ backgroundImage: `url("${e.img}")` }}
                            className="rotation-1 h-full w-auto min-w-full
                                    bg-cover bg-center bg-no-repeat
                                    static "/>
                        {/* <div className='flex justify-center items-center w-full h-full'>
                                <img className='rotation-1 w-full'
                                    src={e.image} alt="" />
                            </div> */}
                        <div className='absolute  top-0 bottom-0 right-0 left-0
                        flex items-center justify-around 
                        
                        bg-black text-white
                        bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:brightness-100'>



                            {/* <a className="px-6 py-2 bg-gray-900 text-gray-200 border rounded group-hover:bg-gray-800"
                                href={e.gitHub} target="__blank" >GitHub</a> */}

                            <a className="px-6 py-2 text-xl bg-gray-300 text-white rounded group-hover:bg-transparent border border-white"
                                href={e.live} target="__blank">
                                ver
                            </a>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}

export default LayoutProjects