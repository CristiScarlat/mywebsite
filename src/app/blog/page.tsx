import Link from "next/link";
import styles from "./page.module.css";

const Blog = () => {

    const posts = [
        {
            title: "Implementing a simple one dimension Kalman Filter in JS",
            date: "July 19, 2018",
            link: "/blog/kalman"
        }
    ]
    return(
        <div className="mt-5 p-3">
            {posts.map(post => (
                <div key={post.title} className={styles.post}>
                    <Link href={post.link} >
                        <h3 className="text-white">{post.title}</h3>
                        <p  className="text-white-50">{post.date}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Blog;