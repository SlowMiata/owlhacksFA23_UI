import React from 'react'
import '../App.css'
import like from '../assets/heart-full.png'
import comment from '../assets/comment.png'

function PostCard({ title, notes, location, src }){
  return (
    <div className="post" style={{
		paddingRight: "4rem",
		paddingLeft: "4rem",
	}}>
      <h1>{title}</h1>
			<p>{notes}</p>
			<h3>{location}</h3>
			<img className='post-uploaded-image' src={src}/>
			<img className='like-button' src={like}/>
			<img className='like-button' src={comment}/>
		</div>
  )
}

export default PostCard;