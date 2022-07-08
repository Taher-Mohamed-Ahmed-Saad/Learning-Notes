import { useState } from "react";
import { useHistory } from "react-router-dom";
import style from './Create.module.scss'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('taher');
  const history = useHistory();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const blog ={ title , body , author };
    await fetch(`${process.env.REACT_APP_API_URL}/blogs`,{
        method: 'POST',
        headers :{'Content-Type' : 'application/json'},
        body : JSON.stringify(blog)
    })
    console.log('blog added');
    history.push('/');
  }

  return (
    <div className={style.create}>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}> 
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="taher">taher</option>
          <option value="ahmed">ahmed</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;