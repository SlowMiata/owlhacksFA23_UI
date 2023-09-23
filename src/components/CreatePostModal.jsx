import React from 'react'

function CreatePostModal(props) {
    const {modal, modalset} = props;


  return (
    <div className='outer-modal'>
        <div className='inner-modal'>
            <button type="submit" className='modal-items' onClick={() => modalset(false)}>X</button>
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