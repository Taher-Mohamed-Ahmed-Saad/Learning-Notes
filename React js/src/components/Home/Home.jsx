import style from './Home.module.scss';
import BlogList from '../BlogList/BlogList';
import useFetch from '../../useFetch';

const Home = () => {
    const {data :blogs , error , isPending} = useFetch('/blogs');
 
    return ( 
        <div className={style.home}>
            {error && <div> {error} </div>}
            {isPending && <p>Loading ..... </p>}
            {blogs && <BlogList blogs={blogs} title="All blogs" /> }
        </div>
     );
} 
export default Home;