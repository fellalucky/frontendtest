import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Home from './components/Home';
import fire from './fire';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[emailerror,setEmailerror] = useState('');
    const[passworderror,setPassworderror] = useState('');
    const[hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
      setEmail('');
      setPassword('');

  }

  const clearErrors = () => {
      setEmailerror('');
      setPassworderror('');
  }

const handleLogin = () => {
  clearErrors();
  fire
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(err => {
      switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
              setEmailerror(err.message);
              break;
          case "auth/wrong-password":
              setPassworderror(err.message);
              break;
      }
  });
};

const handleSignup = () => {
  clearErrors();
  fire
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(err => {
      switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
              setEmailerror(err.message);
              break;
          case "auth/weak-password":
              setPassworderror(err.message);
              break;
      }
  });
};


const authListener = () => {
  fire.auth().onAuthStateChanged(username => {
      if(username){
          clearInputs();
          setUsername(username);
      }else{
          setUsername('');
      }
  });
};

useEffect (() => {
authListener(); 
},[]);
  return(
    <div className="App">
      {username ? (
        <Home/>
      ):(
        <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailerror={emailerror}
      passworderror={passworderror}/>
      )}
      
    </div>
  )

};



export default App;
