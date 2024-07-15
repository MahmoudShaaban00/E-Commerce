import React, { useState } from "react";
import './contact.css';
import { useAuth0 } from "@auth0/auth0-react";
const Contact=() => {

    const { loginWithRedirect ,logout, user, isAuthenticated } = useAuth0();

    const [users,setuser]=useState(
        {
            Name:'',Email:'',Subject:'',Message:''
        }
    )

    let name, value
    const data =(e)=>{
        name= e.target.name;
        value=e.target.value;
        setuser({...users,[name]:value})
    }

    const senddata = async (e)=>{
        const{Name, Email, Subject, Message} = users;
        e.preventDefault();
        const options ={
            method:'POST',
            headers:{
                'Content-type' : 'aplication/json'
            },
            body:JSON.stringify({
                Name,Email,Subject,Message
            })
        }
        const res = await fetch('https://e-commerce-contant-default-rtdb.firebaseio.com/Message.json',options)
        if(res)
        {
            alert('Your Message sent')
        }
        else
        {
            alert('An errror accured')
        }
    }

    return(
        <>
         <div className="contact_container">
            <div className="content">
                <h2># contact us</h2>
                <div className="form">
                    <form method='POST'>
                        <input type="text" name="Name" value={users.Name} placeholder="Enter Your Full Name" required autoComplete="off" onChange={data}/>
                        <input type="email" name="E-mail" value={users.Email} placeholder="Enter Your E-mail"  autoComplete="off"  onChange={data} />
                        <input type="text" name="Subject" value={users.Subject} placeholder="Enter Your Subject"  autoComplete="off"  onChange={data}/>
                        <textarea name="Message" value={users.Message} placeholder="Your Message"  autoComplete="off"  onChange={data}/>
                        {
                            isAuthenticated ?
                            <button type="submit" onClick={ senddata}>Send</button>
                            :
                            <button type="submit" onClick={()=> loginWithRedirect()}>login</button>

                        }
                    </form>
                </div>
            </div>
         </div>
        </>
    )
}
export default Contact 