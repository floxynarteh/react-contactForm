import React, {useState} from "react"

export const  ContactForm = () => {
    const [userame, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userame);
    }

    return(
        <div className="auth-form-container">
            <form className="contact-form" onSubmit={handleSubmit}> 
                <label htmlFor="username">Username</label>
                <input value={userame} onClick= {(e) => setUsername(e.target.value)}type="userame" placeholder="firstname lastname" id="username" name="username"></input>
                <label htmlFor="email">Email</label>
                <input value={email} onClick= {(e) => setEmail(e.target.value)}type="email" placeholder="yello@gmail.com" id="email" name="email"/>
                <button type="submit"> Submit</button>
            
            </form>
        </div>
            
        
    )
       
    
}