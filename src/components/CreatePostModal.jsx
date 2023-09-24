import React from 'react'
import { useState } from 'react'

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

function CreatePostModal({modalset, modal}) {
    const handleBtnClick = () =>{
        modalset(false);
    }

    const [base64String, setBase64String] = useState("");
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [location, setLocation] = useState("");

  return (
    <div className='outer-modal'>
        <div className='inner-modal'>
        <button onClick={handleBtnClick}>Close Modal</button>
            <div className='modal-content'>
                <form>
                    <input type="text" placeholder='Post Title' onChange={e => setTitle(e.target.value)} className='modal-items' /><br/>
                    <input type="text" placeholder='Notes about Pothole' className='modal-items' onChange={e => setNotes(e.target.value)}/><br/>
                    <input type="text" placeholder='Location (Closest Street Address)' className='modal-items' onChange={e => setLocation(e.target.value)}/><br/>
                    <input type="file" id="myFile" name="filename" className='modal-items' onChange={async e => {
                        const converted = await getBase64(e.target.files[0]);
                        setBase64String(converted);
                    }}/><br/>
                    <button type="submit" className='modal-items' onClick={e => {
                        e.preventDefault();
                        const body = {
                            title,
                            notes,
                            location,
                            email: "",
                            base64: base64String,
                        }
                        fetch("http://localhost:8000/posts/add", {
                            method: "post",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(body),
                        })
                        .then(res => res.json())
                        .then(data => console.log(data));

                        modalset(false);

                        window.location.reload(false);
                    }}>Post Pothole</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePostModal