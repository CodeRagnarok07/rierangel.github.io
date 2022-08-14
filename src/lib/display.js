 const displayContent = (tag ,e) => {

    // cambiar la url de las imagenes
    // const html = e.replace(/(src\s*=\s*["'])/g, `src="${process.env.REACT_APP_API_URL}`);


    const article = <article dangerouslySetInnerHTML={{ __html: e }} ></article>
    return article
};

export default displayContent