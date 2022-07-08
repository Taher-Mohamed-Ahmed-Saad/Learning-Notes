import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import style from './BlogDetails.module.scss';

const BlogDetails = () => {
    const {id} = useParams();
    const {data :blog , isPending , error} = useFetch(`/blogs/${id}`);
    const history = useHistory();

    const handelCLick = async () =>{
        await fetch(`${process.env.REACT_APP_API_URL}/blogs/${id}`, { method:"DELETE"  });
        console.log('Blog deleted');
        history.push('/');   
    }

    return ( 
        <div className={style.blogDetails}>
            {error && <div> {error} </div>}
            {isPending && <p>Loading ..... </p>}
            {blog && 
            (
                <article>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author} </p>
                    <div>{blog.body}</div>
                    <button onClick={handelCLick}>Delete blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;