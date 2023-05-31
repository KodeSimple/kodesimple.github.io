import React from 'react'
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter'

function PosUser() {
  return (
       <>
          <div>
              <div><PosNavBarComp /></div> 
                   <main>
                       {/* User table list starts here */}
                       <section className="pt-5">
                            <h1 className="text-center my-4">User's Registration list</h1>
                            <div className="table-container container-fluid d-flex justify-content-center w-100">
                              <div className="p-1 w-75 pt-5">
                                <thead>
                                  <table id="usersRegistrationList" className="display table table-striped table-hover w-100">
                                     <tr> 
                                       <th>Busines Name</th>
                                       <th>First Name</th>
                                       <th>Last Name</th>
                                       <th>User Name</th>
                                       <th>Email Address</th>
                                       <th>Password</th>
                                    </tr>
                                    <tbody>
                                  </tbody>
                                  </table>
                                </thead>
                              </div>
                            </div>
                       </section>

                        {/* user table list ends here */}
                   </main>
              <div><PosFooter /></div>
          </div>
      </>
  )
}

export default PosUser;
