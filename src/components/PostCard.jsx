import React from 'react'
import '../App.css'
import like from '../assets/heart-full.png'
import comment from '../assets/comment.png'

function PostCard(){
  return (
    <div className="post">
      <h2>Post Title</h2>
			<p>Lorem ipsum dolor sit amet. Ut dolores excepturi ex delectus eligendi et accusamus ullam ex fugiat nemo qui perferendis omnis. In inventore perspiciatis quo ipsa maiores et dolore nesciunt vel molestiae voluptatem et asperiores ratione ad earum dolorem est consectetur internos. Aut suscipit enim et nemo porro ea consequuntur earum est esse recusandae id rerum voluptatem sit accusamus quia qui mollitia autem.</p>
			<img className='post-uploaded-image' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijcvtTNVAeDGhEIDZJLKn3OT8ezGzm7rUaDkRrNI&s"}/>
			<img className='like-button' src={like}/>
			<img className='like-button' src={comment}/>
		</div>
  )
}

export default PostCard;