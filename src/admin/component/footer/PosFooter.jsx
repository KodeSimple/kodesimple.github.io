import React from 'react'
import '../../../admin/component/footer/PosFooter.css'
import { Button } from 'react-bootstrap';
import facebookLogo from '../../resources/icons8-facebook-64.png';
import gmailLogo from '../../resources/Gmail_icon_(2020).svg.webp';
import messengerLogo from '../../resources/messenger-logo-removebg-preview.png';

function Footer() {
  return ( 
    <>   
     <footer class="footerBgColor container-fluid mb-0 "> 
        <div className="page-footer justify-content-around d-flex container-fluid w-100"> 
               {/* //////////////insert footer from mp2 here///////////////////////////// */}         
                   <div class="d-flex align-self-center d-inline-block"> 
                                 {/* <Span> */}
                                   <p>© 2023 KodeSimple</p>
                                 {/* </Span> */}
                     </div> 
                            
                    <div class="p-0 d-flex d-block flex-row flex-row">
                                 <div class="p-2">
                                          <Button
                                                // variant="outline-primary"
                                                className="m-2 footerButton"
                                                href="https://www.facebook.com/profile.php?id=100092405686394"
                                                target="_blank"
                                                role="button"
                                                 >
                                                  <img src={facebookLogo} height="20px" alt="logo" fluid />
                                          </Button>
                                 </div>
                                 <div class="p-2 ">  
                                          <Button
                                                // variant="outline-primary"
                                                className="m-2 footerButton"
                                                href="mailto:kodesimple57@gmail.com"
                                                target="_blank"
                                                role="button"
                                                >
                                                <img src={gmailLogo} height="20px" alt="logo" fluid />
                                          </Button>
                                 </div>
                                 <div class="p-2 ">
                                           <Button
                                                // variant="outline-primary"
                                                className="m-2 footerButton"
                                                href="https://www.messenger.com/t/117956294624198/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0"
                                                target="_blank"
                                                role="button"
                                              >
                                              <img src={messengerLogo} height="20px" alt="logo" fluid />
                                          </Button>
                                 </div>
                       </div>
              </div>   
         </footer>                          
      </>
  )
}

export default Footer
