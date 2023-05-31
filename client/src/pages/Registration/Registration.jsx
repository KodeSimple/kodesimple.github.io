import React from 'react'

function Registration() {
  return (
        <>
             <div>
                    {/* registration form starts here */}
                    <form id="registration-form">
                                <div className="mb-3">
                                  <div className="mb-1">
                                    <label for="regBusinessName" className="form-label">Business name</label>
                                    <input type="text" name="regBusinessName" className="form-control" id="regBusinessName" />
                                    <span className="error" id="regBusinessNameError"></span>
                                  </div>
                                  <div className="mb-1">
                                    <label for="regFirstName" className="form-label">Name</label>
                                    <input type="text" name="regFirstName" className="form-control" id="regFirstName" />
                                    <span className="error" id="regFirstNameError"></span>
                                  </div>
                                  <div className="mb-1">
                                    <label for="regLastName" className="form-label">Last name</label>
                                    <input type="text" name="regLastName" className="form-control" id="regLastName" />
                                    <span className="error" id="regLastNameError"></span>
                                  </div>
                                  <div className="mb-1">
                                    <label for="regUserName" className="form-label">Username</label>
                                    <input type="text" name="regUserName" className="form-control" id="regUserName" />
                                    <span className="error" id="regUserNameError"></span>
                                  </div>
                                  <div className="mb-1">
                                    <label for="regEmailAd" className="form-label">Email address</label>
                                    <input type="email" name="regEmailAd" className="form-control" id="regEmailAd"
                                      aria-describedby="emailHelp" />
                                    <span className="error" id="regEmailAdError"></span>
                                  </div>
                                  <div className="mb-1">
                                    <label for="regPassword" className="form-label">Password</label>
                                    <input type="password" name="regPassword" className="form-control" id="regPassword" />
                                    <span className="error" id="regPasswordError"></span>
                                  </div>
                            
                                 <button type="submit" id="registrationButton" className="btn btn-primary">Submit</button>
                             </div>
                                                     
                                 
                   </form>
                     {/* registration form ends here */}
             </div>
        </>
  )
}

export default Registration
