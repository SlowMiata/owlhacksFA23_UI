import React, { useState } from 'react'
import '../App.css'


function AddPostButton(props){
    const {modal, modalset} = props;

  return (
    <div>
        <button type='submit' className='post-button' onClick={() => modalset(!modal)}><h2>+Post</h2></button>
    </div>
  )
}

export default AddPostButton