import { useState } from 'react'
import './App.css'
import PostCard from './components/PostCard'
import AddPostButton from './components/AddPostButton'
import './index.css'
import CreatePostModal from './components/CreatePostModal'
import AppHeader from './components/AppHeader'



function Feed() {
    const [modal, setmodal] = useState(false)

    return<>
    <AppHeader/>
    <PostCard/>
    <PostCard/>
    {modal && <CreatePostModal/>}
    <AddPostButton modalset={setmodal} modal={modal}/>
    </>
}


export default Feed;


