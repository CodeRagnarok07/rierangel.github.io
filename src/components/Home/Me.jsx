

const Me = () => {

    const data = {
        me: "Desarrollador web FullStack especializado en Django y React",
        feat: [
            {
                title: "Experiencia",
                sub_title: "mas de 2 años de experiencia practica en el desasarrollo de aplicaciones con Python y JavaScrip",
                icon: "/img/me/01.svg"
            },
            {
                title: "Stack tegnologico",
                sub_title: "Conocimiento en mas de 15 herramientas de desarrollo",
                icon: "/img/me/03.svg"
            },
            {
                title: "Proyectos",
                sub_title: "+ 40 Proyectos creados en github",
                icon: "/img/me/02.svg"

            }
        ]
    }


    return (data &&
        <div className='mb-24 mt-12 md:mt-24'>

            <h1 className='text-center mx-[10%] md:mx-[25%]' >
                {data.me}
            </h1>

            <div className='flex justify-center  mx-auto px-3 sm:px-24 mt-8 w-[90%]'>
                <div className="w-full grid gap-5 md:gap-10 md:grid-cols-3">

                    {data.feat.map((e, i) => (
                        <div key={i} className='text-center px-2 py-5 rounded-3xl flex flex-col items-center border bg-indigo-800 w-full' >
                            <div className='w-12 h-12  border-2 border-white bg-slate-700 flex justify-center items-center rounded-full'>

                                <img width={25} height={25} src={e.icon} alt={e.title} />

                                {/* {e.icon} */}

                            </div>
                            <div>
                                <span className='my-4 text-slate-300 h-3 underline underline-offset-1'>
                                    {e.title}
                                </span>
                            </div>
                            <span className='text-slate-400 '>
                                {e.sub_title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


        </div >
    )
}

export default Me