

const Blog = () => {
    return(
        <div>
            <iframe sandbox="allow-scripts allow-popups"
                    src={`http://localhost:3000/blogArticles/kalman/index.html`}
                    className="w-100 hv-100"/>
        </div>
    )
}

export default Blog;