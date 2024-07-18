import React,{useState} from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() 
 { const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
   const navigate=useNavigate();
 
    


  const handleGoogleSignIn = () => {
  window.location.href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1";
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (email === 'shrutijadhav1411@gmail.com' && password === '123') {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  }
  return (

 
    <div className="login-container">
      <div className="left-panel">
        <div className="logo">LOGO</div>
        <div className="board-text">Board.</div>
        <div className="icons">
          <a href="https://github.com/"><i className="fab fa-github"></i></a>
         <a href="https://x.com/"><i className="fab fa-twitter"></i></a> 
         <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a> 
          <a href="https://discord.com"><i className="fab fa-discord"></i></a>
        </div>
      </div>
      <div className="right-panel">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <div className="social-signin">
          <button className="google-btn" onClick={handleGoogleSignIn}><i className="fab fa-google google-icon"></i>Sign in with Google</button>
          <button className="apple-btn"><i className="fab fa-apple"></i>Sign in with Apple</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type="email" placeholder="johndoe@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit" className="signin-btn">Sign In</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p className="register">Don't have an account? <a href="#">Register here</a></p>
      </div>
    </div>

    
  )


}
