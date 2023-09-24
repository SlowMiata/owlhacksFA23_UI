import React from 'react'
import { useState } from 'react'


function CreatePostModal({modalset, modal}) {
    const handleBtnClick = () =>{
        modalset(false);
    }


  return (
    <div className='outer-modal'>
        <div className='inner-modal'>
        <button onClick={handleBtnClick}>Close Modal</button>
            <div className='modal-content'>
                <form action="/action_page.php">
                    <input type="text" placeholder='Post Title' className='modal-items' /><br/>
                    <input type="text" placeholder='Notes about Pothole' className='modal-items' /><br/>
                    <input type="text" placeholder='Location (Closest Street Address)' className='modal-items' /><br/>
                    <input type="file" id="myFile" name="filename" className='modal-items'/><br/>
                    <button type="submit" className='modal-items'>Post Pothole</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePostModal