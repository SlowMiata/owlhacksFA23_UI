import React from "react"
import '../App.css'


function AccountHeader(){
    return (
    
    <div className="account-header">
        <button className="return-to-feed">Back</button>
        <h1>Account</h1>
        {/* <div><button className="return-to-feed-invisible">Back</button></div> */}
    </div>
    );
}

export default AccountHeader;


