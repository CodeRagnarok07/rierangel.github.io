import { useRef } from "react"


const SkillsExp = () => {
    const slider = useRef()

    const skills = [
        {
            "name": "Django",
            "color": "0f766e",
            "T-color": "teal-700",
            "description": "HTTP methods | Testing | User Authentication | Customized user authentication | Administrator management | Database design |  PostgreSQL and SQLite3 databases | Forms | Forms | Template management | Template management ",
        },
        {
            "name": "REST",
            "color": "262626",
            "T-color": "gray-800",
            "description": "Django Rest Framework |rest full api creation | Connecting to React | Frontend user authentication | HTTP methods | Data analysis | Uploading and downloading of files | JWT auth with forntend | Postman endpoint testing",
        },
        {
            "name": "React",
            "color": "1d4ed8",
            "T-color": "blue-700",
            "description": "Jsx | React-router-dom | State management; code splitting redux, contex Provider | Axios | shapes | UI Stuff | Get apis or integrate backend",
        },
        {
            "name": "Redux",
            "color": "3730a3",
            "T-color": "indigo-900",
            "description": "status management | authentication | react redux integration | redux thunk",
        },
        {
            "name": "Next",
            "color": "1e293b",
            "T-color": "slate-800",
            "description": "Node.js | interface design and layout | SEO optimization | Local API | use redux",
        },
        {
            "name": "WLS2",
            "color": "ea580c",
            "T-color": "orange-600",
            "description": "Creation of environments | Terminal handling | Software installation and updating",
        },
        {
            "name": "PostgreSQL",
            "color": "0369a1",
            "T-color": "sky-700",
            "description": "Connect with Django | Pgadmin | database design | Database Management | SQL queries",
        },
        {
            "name": "SQLite3",
            "color": "0284c7",
            "T-color": "sky-600",
            "description": "Connect with Django | database design | Database Management | SQL queries",
        },
        {
            "name": "Mongodb",
            "color": "15803d",
            "T-color": "green-700",
            "description": "Connect with React and Next ",
        },
        {
            "name": "Firebase",
            "color": "f59e0b",
            "T-color": "amber-500",
            "description": "Deploy apps | storage | data base NOSQL",
        },
        {
            "name": "Heroku",
            "color": "6366f1",
            "T-color": "indigo-500",
            "description": "Deploy apps | database manage",
        },
        {
            "name": "Git",
            "color": "b91c1c",
            "T-color": "red-700",
            "description": "branch management | version control | deploy | reset | merge ",
        },
        {
            "name": "GitHub",
            "color": "1e293b",
            "T-color": "slate-800",
            "description": "workflow testing | merge for teamwork | GitHubActions",
        },
        {
            "name": "Docker",
            "color": "0ea5e9",
            "T-color": "sky-500",

            "description": "Create add delete stop builds | Images | creation and deploy | Docker compose | Devcontainer | Local development environment",
        },
        {
            "name": "TailwindCSS",
            "color": "0891b2",
            "T-color": "cyan-600",
            "description": "Layout one pages | create components | figma design | UI-UX design | flex, grid, colors",
        },
        {
            "name": "Bootstrap",
            "color": "7c3aed",
            "T-color": "violet-600",
            "description": "Layout one pages | create components |  flex, grid, colors",
        }

    ]


    return (
        <div className="border-b">
            <h1 className=" py-5 text-center mb-6 underline leading-[4rem] mx-4 ">
                Habilidades Técnicas
            </h1>
            <div className='my-16 h-48'>
                <div className='flex items-center justify-center w-full h-full '>
                    <button className='bg-slate-400 rounded-full mx-2' onClick={() => slider.current.scrollLeft -= slider.current.children[0].offsetWidth}>
                        <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path></svg>
                    </button>

                    <div ref={slider} className='
                    transition ease-out delay-700 duration-500
                    overflow-hidden scroll-smooth h-full flex items-start justify-start'>
                        {skills && skills.map((e, i) => (
                            <div key={i} className='group'>
                                <div key={i} className=' flex flex-col justify-center text-center items-center snapt-start flex-shrink-0 mx-4 '>
                                    <div className='border-2 border-white rounded-full'>
                                        <div style={{ borderColor: `#${e.color}` }}
                                            className={`bg-gray-400 p-2 h-24 w-24 rounded-full flex justify-center items-center border-8 `}>
                                            <img fill={`#${e.color}`} width={80} height={80} src={`/img/skills/${e.name}.svg`} alt={`images${i}`} className='object-cover object-center w-full' />
                                        </div>
                                    </div>
                                    {/* <h5>{e.name}</h5> */}
                                </div>
                                <div className=' justify-center items-end mt-[3rem]
                                transition ease-out duration-300                        
                                hidden group-hover:flex right-0 left-0 absolute'>
                                    <div className='flex flex-col items-center'>
                                        <h3 className='underline mb-2'>{e.name}</h3>
                                        <p className="text-center">
                                            {e.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className='bg-slate-400 rounded-full mx-2' onClick={() => slider.current.scrollLeft += slider.current.children[0].offsetWidth}>
                        <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path></svg>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default SkillsExp