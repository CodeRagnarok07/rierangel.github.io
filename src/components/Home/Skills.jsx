import { useEffect, useRef, useState } from "react"
import { get } from 'src/lib/fetcher'
import { useQuery } from "@tanstack/react-query"

const SkillsExp = () => {

    const slider = useRef()
    
    const { status, data, error, isFetching } = useQuery(["skills"], async ()=> get('/portfolio/skills/'));
    const [obj, setObject] = useState()
    useEffect(() => {
        if(!isFetching){
            setObject(data)
        }
    }, [isFetching])

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
                    {/* 
                    <div className="bg-white rounded-full h-15 w-auto">
                        <img width={60} height={60} src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" version="1" viewBox="0 0 512 512" ><path d="M1865 4953c-340-44-643-222-835-490-94-133-173-305-195-426-5-27-13-38-29-41-11-2-48-10-81-16-242-49-450-238-532-485-23-71-26-96-26-215-1-118 3-145 25-212 39-119 92-204 182-294s176-143 294-182c68-22 99-25 265-30l187-4V1520H951l-24 53c-30 66-81 118-150 154-44 23-65 27-137 28-101 0-159-23-228-93-65-65-87-120-87-222s22-157 87-222c67-67 127-92 223-93 66 0 90 5 136 26 70 33 125 87 156 156l24 53h169V609l-25-24c-23-24-29-25-164-25H791l-24 53c-30 66-81 118-150 154-44 23-65 27-137 28-101 0-159-23-228-93-65-65-87-120-87-222s22-157 87-222c67-67 127-92 223-93 66 0 90 5 136 26 70 33 125 87 156 156l24 53h141c81 0 158 5 182 12 55 16 138 99 154 154 8 29 12 151 12 418v376h336c235 0 349 4 378 12 55 16 138 99 154 154 9 30 12 177 12 538v496h320V791l-53-24c-66-30-118-81-154-150-23-44-27-65-27-137-1-101 23-159 92-228 65-65 120-87 222-87s157 22 222 87c69 69 93 127 92 228 0 72-4 93-27 137-36 69-88 120-154 150l-53 24v1769h320v-576c0-424 3-588 12-618 16-55 99-138 154-154 29-8 143-12 378-12h336V904c0-204 4-310 12-338 16-55 99-138 154-154 24-7 101-12 182-12h141l24-53c52-115 158-182 287-182 127 0 227 62 287 178 23 44 27 65 27 137 1 100-23 159-89 225s-125 90-225 89c-72 0-93-4-137-27-69-36-120-88-150-154l-24-53h-140c-135 0-141 1-164 25l-25 24v591h169l24-53c30-66 81-118 150-154 44-23 65-27 137-27 101-1 159 23 228 92 65 65 87 120 87 222s-22 157-87 222c-69 69-127 93-228 92-72 0-93-4-137-27-69-36-120-88-150-154l-24-53h-169v1198l188 4c165 5 196 8 264 30 118 39 204 92 294 182s143 175 182 294c22 67 26 94 26 212s-4 145-26 212c-39 119-92 204-182 294-91 90-176 143-294 182-64 20-104 25-228 30l-152 5-6 47c-18 134-89 265-205 380-95 94-175 142-301 181-96 30-280 33-377 7-63-18-167-63-214-94l-26-17-74 77c-227 239-556 379-879 374-52 0-108-3-125-5zm282-164c238-32 492-172 643-353 117-141 216-352 235-501 14-109 5-101 93-95l77 5-3 30c-13 141-56 294-117 415-20 40-34 78-31 85 8 21 126 74 201 90 191 40 365-13 505-154 87-88 122-148 150-257 32-122 24-226-24-345l-24-59 67-39c36-22 69-37 73-35 14 9 67 162 74 212l7 52h106c142 0 209-13 308-61 342-164 418-622 147-893-78-77-190-138-288-155-83-15-3489-15-3572 0-32 5-97 29-142 51-342 168-416 623-146 892 182 182 460 216 688 82 53-31 136-111 173-167l25-38 47 26c25 14 56 32 68 39l22 14-22 37c-35 60-142 167-210 212-72 47-164 86-237 102-28 6-50 16-50 23s11 46 25 86c109 321 360 565 685 664 144 45 294 56 447 35zm-147-2724v-496l-25-24-24-25h-671v1040h720v-495zm1840-105v-600h-671l-24 25-25 24v1151h720v-600zM703 1586c103-43 128-177 48-257-65-65-157-65-222 0-124 123 13 325 174 257zm3865-173c50-38 67-70 67-132 0-47-5-64-27-93-70-92-192-89-262 6-32 43-29 132 6 178 15 19 42 42 60 52 42 21 120 16 156-11zM543 626c103-43 128-177 48-257-65-65-157-65-222 0-124 123 13 325 174 257zm2083-2c103-49 125-175 45-255-65-65-157-65-222 0-125 125 18 330 177 255zm2077 2c103-43 128-177 48-257-65-65-157-65-222 0-124 123 13 325 174 257z" transform="matrix(.1 0 0 -.1 0 512)" ></path> <path d="M786 3669c-62-15-153-68-197-116-22-24-55-74-72-111-29-61-32-76-32-163 0-90 2-99 37-171 45-91 103-147 196-191l67-32 288-3 287-3v161h-256c-172 0-270 4-298 12-86 26-166 136-166 228 0 115 116 240 224 240 13 0 16 13 16 80v80l-27-1c-16-1-45-5-67-10zM1625 3655c-14-13-25-32-25-42s-18-175-40-368c-21-192-37-351-35-353 4-5 149-22 152-18 1 1 7 47 13 102 18 161 0 144 150 144s132 17 150-144c6-55 12-101 13-102 3-4 148 13 152 18 2 2-14 161-35 353-22 193-40 358-40 368s-11 29-25 42c-24 25-26 25-215 25s-191 0-215-25zm309-182c3-27 9-81 12-120l7-73h-226l7 73c3 39 9 93 12 120l7 47h174l7-47zM2345 3655l-25-24v-751h160v320h215c286 0 265-19 265 240 0 189 0 191-25 215l-24 25h-542l-24-25zm455-215v-80h-320v160h320v-80zM3120 3600v-80h160v-480h-160v-160h480v160h-160v480h160v160h-480v-80z" transform="matrix(.1 0 0 -.1 0 512)" ></path> </svg>}`} alt={"name"} />
                    </div> */}

                    <div ref={slider} className='
                    transition ease-out delay-700 duration-500
                    overflow-hidden scroll-smooth h-full flex items-start justify-start'>

                        {obj && obj.map((e, i) => (
                            <div key={i} className='group'>
                                <div key={i} className=' flex flex-col justify-center text-center items-center snapt-start flex-shrink-0 mx-4 '>
                                    <div className='border-2 border-white rounded-full'>
                                        <div style={{ borderColor: `${e.color}` }}
                                            className={`bg-gray-400 p-2 h-24 w-24 rounded-full center border-8 `}>

                                            <div className="w-24 h-24 center"  dangerouslySetInnerHTML={{ __html: e.svg }} ></div>
                                            {/* <Svg iten={e.svg}/> */}
                                            {/* <img width={60} height={60} src={`data:image/svg+xml;utf8,${e.svg}`} alt={e.name} /> */}

                                            {/* <img fill={`#${e.color}`} width={80} height={80} src={`/img/skills/${e.name}.svg`} alt={`images${i}`} className='object-cover object-center w-full' /> */}

                                        </div>
                                    </div>
                                    {/* <h5>{e.name}</h5> */}
                                </div>


                                <div className=' mt-[3rem]
                                invisible group-hover:visible                             
                                right-0 left-0 absolute                                
                                transition ease-out duration-300       w-full                 
                                '>
                                    <div className='flex flex-col items-center'>
                                        <h3 className='underline mb-2'>{e.name}</h3>
                                        <article dangerouslySetInnerHTML={{ __html: e.description }} />
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