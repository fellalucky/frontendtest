import React from 'react';


const Daftar = () => {
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <div className="card-body">
                        <h2 style={{alignItems:'center'}}>Register</h2>

                        <div className="form-group">
                        
                            <label>Email</label>
                            <input type="text" placeholder="Email" className="form-control"/>
                            </div>

                            <div className="form-group">
                        
                        <label>Password</label>
                        <input type="password" placeholder="Password" className="form-control"/>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daftar