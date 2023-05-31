import React from 'react'

function Login() {
  return (
        <>
            <div>
                {/* form starts here */}
               <form id="credentials-validation-form">
                   <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" />

                    </div>
                    <div className="mb-3">
                       <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                  </div>
                
                       {/* <!---------------Toast message ends here------------------------> */}
                               <div className="toast align-items-center" id="myToast" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div className="d-flex">
                                        <div className="toast-body">
                                              Registration was successful, please login.
                                        </div>
                                         <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                </div>
                            {/* !---------Toast message ends here-----------------> */}
                    <button type="submit" className="btn btn-primary" id="for-credentials-validation">Submit</button>
                </form>
                 {/* form ends here */}
            </div>
       </>
  )
}

export default Login
