import React from 'react'
import './SideNav.css'
import { Link } from 'react-router-dom'


import home from '../Accets/home.svg'
import library from '../Accets/library.svg'
import subscription from '../Accets/subscriptions.svg'
import history from '../Accets/history.svg'
import watchLater  from '../Accets/watchLater.svg' 
import likedVedio from '../Accets/liked.svg'
import newVedio from '../Accets/newVideo.svg'
import help from '../Accets/help.svg'
import settings from '../Accets/settings.svg'
import report from '../Accets/report.svg'
import sports from '../Accets/sports.jpg'
import premium from '../Accets/premium.svg'
import sendfeedback from '../Accets/feedback.svg'


const SideNav = () => {
  return (
    <>
    {/* <!-- sidebar --> */}
    <div class="side-bar">

       
        <Link to="/explore" class="links" ><img src={library} />Explore</Link>
        <Link to="/subscription" class="links"><img src={subscription} />Subscription</Link>
        <Link to="/home"  class="links active"><img src={home}/>Home</Link>
        <hr class="seperator" />
        <h3 className='titles'>You</h3>
        <a href="#" class="links"><img src={history} alt="aa"/>history</a>
        <a href="#" class="links"><img src={likedVedio} alt="aa"/>your video</a>
        <a href="#" class="links"><img src={library} alt="aa"/>library</a>
        <a href="#" class="links"><img src={watchLater}  alt="aa"/>watch leater</a>
        <hr class="seperator" />

        
        <h3 className='titles'>Explore</h3>
        <a href="#" class="links"><img src={newVedio} alt="aa"/>show more</a>
        <a href="#" class="links"><img src={likedVedio} alt="aa"/>play list</a>
        <a href="#" class="links"><img src={premium} alt="aa"/>premium</a>
        <a href="#" class="links"><img src={sports} alt="aa"/>sports</a>

        <hr class="seperator" />

        <a href="#" class="links"><img src={help} alt="aa"/>help</a>
        <a href="#" class="links"><img src={report} alt="aa"/>report</a>
        <a href="#" class="links"><img src={settings} alt="aa"/>settings</a>
        <a href="#" class="links"><img src={sendfeedback} alt="aa"/>send-feedback</a>

        <hr class="seperator" />

        <p >About Press Copy right Contact <br/> us Creator Advertise Developers <br/>    
        TermsPrivacyPolicy & SafetyHow YouTube works Test new features <br/> 
        © 2024 Google LLC</p>
        
    </div>

    </>
  )
}

export default SideNav