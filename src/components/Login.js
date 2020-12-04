import React from 'react';

const Login = (props) => {

    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailerror,
        passworderror

        } = props;

    return(
        <section className="login">
            <div className="loginform">
                <label className="label">Username</label>
                <input className="inputform" type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p className="errorMsg">{emailerror}</p>
                <label className="label">Password</label>
                <input className="inputform" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <p className="errorMsg">{passworderror}</p>
                <div className="btnform">
                    {hasAccount ? (
                        <>
                        <button className="button" onClick={handleLogin}>Sign In</button>
                        <p className="p">Don't have account? <span className="span" onClick={() =>setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ):(
                        <>
                        <button className="button" onClick={handleSignup}>Sign Up</button>
                        <p className="p">Have an account ? <span className="span" onClick={() =>setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>  
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
