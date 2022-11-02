 const displayContent = (tag ,e) => {

    // cambiar la url de las imagenes
    // const html = e.replace(/(src\s*=\s*["'])/g, `src="${process.env.REACT_APP_API_URL}`);


    const article = <p dangerouslySetInnerHTML={{ __html: e }} ></p>
    return article
};

export default displayContent