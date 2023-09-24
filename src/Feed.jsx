import { useEffect, useRef, useState, useReducer } from 'react'
import './App.css'
import PostCard from './components/PostCard'
import AddPostButton from './components/AddPostButton'
import './index.css'
import CreatePostModal from './components/CreatePostModal'
import AppHeader from './components/AppHeader'



function Feed() {
    const [modal, setmodal] = useState(false)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/posts")
        .then(res => res.json())
        .then(data => {
            data.reverse();
            setPosts(data);
        });
    }, []);


    return<>
    <AppHeader/>
    <div className='feed' style={{
        width: "800px",
        margin: "4rem auto",

    }}>
        {posts.map((post, i) => {
            return <PostCard 
            key={i}
            title={post.title}
            notes={post.notes}
            location={post.location}
            src={post.base64}
            />
        })}
    </div>
    {modal && <CreatePostModal modalset={setmodal}/>}
    <AddPostButton modalset={setmodal} modal={modal}/>
    </>
}


export default Feed;


