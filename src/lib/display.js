 const displayContent = (e) => {
    const html = e.replace(/(src\s*=\s*["'])/g, `src="${process.env.REACT_APP_API_URL}`);
    console.log(html);
    const article = <article dangerouslySetInnerHTML={{ __html: html }} ></article>
    return article
};

export default displayContent