import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router'


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        emailjs.sendForm('Personal_Email', 'template_falg43x', form.current, process.env.REACT_APP_USER_ID_MAIL)
            .then((result) => {
                console.log(result.text);
                alert(`success, your message will be answered soon `)
            }, (error) => {
                console.log(error.text);
            });
        e.preventDefault();
        e.target.reset();
    };

    const data = ["Contacta me ","Email:", "Asunto:", "Mensaje:", "Enviar" ]


    return ( data &&
        <div className="flex justify-center">
            <div className='my-24 mx-[2%]  lg:mx-[20%] xl:mx-[25%] w-full sm:w-3/4 md:1/2 flex flex-col justify-center border-4 rounded-lg py-5 border-indigo-900'>
                <h1 className="text-center" >{data[0]}</h1>
                <form ref={form} onSubmit={sendEmail} className="w-full my-8">
                    <div className="flex flex-col justify-center ">
                        <input className="w-[90%] md:w-2/3 my-2 mx-auto m-[2%] shaodw shadow-md rounded-full px-4 focus:shadow-blue-600 shadow-sky-900 bg-transparent 
                        selection:active:focus:bg-transparent focus:outline-none"
                            autoComplete='off' aria-autocomplete='none' type="email" name="from_email" required placeholder={data[1]}
                        />
                        <input className="w-[90%] md:w-2/3 my-2 mx-auto m-[2%] shaodw shadow-md rounded-full px-4 focus:shadow-blue-600 shadow-sky-900 bg-transparent 
                        selection:active:focus:bg-transparent focus:outline-none"
                            autoComplete='off' type="text" name="subject" required placeholder={data[2]}
                        />
                        <textarea className="w-[90%] md:w-2/3 my-2 mx-auto m-[2%] shaodw shadow-md rounded-md px-4 focus:shadow-blue-600 shadow-sky-900 bg-transparent 
                        selection:active:focus:bg-transparent focus:outline-none h-40"
                            name="message" required placeholder={data[3]}
                        />
                    </div>
                        <div className='flex justify-center items-center'>
                            <button type="submit"
                            className='-mb-[7rem] px-10 py-3 transition-color
                            shadow-md rounded-lg shadow-indigo-900
                            bg-gradient-to-r from-blue-700 to-indigo-900
                            hover:bg-gradient-to-l transition-color ease-out duration-300
                            ' >{data[4]}</button>
                        </div>
                </form>
            </div >
        </div >

    )
}

export default Contact