
import React from 'react'
import './Index.css'
import search from '../YOUTUBE-FETCH/Accets/search.svg'
import logoSVG from '../YOUTUBE-FETCH/Accets/logo.svg'
import notificationsSVG from '../YOUTUBE-FETCH/Accets/notifications.svg'
import appsSVG from '../YOUTUBE-FETCH/Accets/apps.svg'
import newVideoSVG from '../YOUTUBE-FETCH/Accets/newVideo.svg'
import  menu from '../YOUTUBE-FETCH/Accets/menu.svg'


// side-bar 

// import home from '../YOUTUBE-FETCH/Accets/home.svg'
// import library from '../YOUTUBE-FETCH/Accets/library.svg'
// import subscription from '../YOUTUBE-FETCH/Accets/subscriptions.svg'
// import history from '../YOUTUBE-FETCH/Accets/history.svg'
// import watchLater  from '../YOUTUBE-FETCH/Accets/watchLater.svg' 
// import likedVedio from '../YOUTUBE-FETCH/Accets/liked.svg'
// import newVedio from '../YOUTUBE-FETCH/Accets/newVideo.svg'
// import help from '../YOUTUBE-FETCH/Accets/help.svg'
// import settings from '../YOUTUBE-FETCH/Accets/settings.svg'
// import report from '../YOUTUBE-FETCH/Accets/report.svg'
// import sports from '../YOUTUBE-FETCH/Accets/sports.jpg'
// import premium from '../YOUTUBE-FETCH/Accets/premium.svg'
// import sendfeedback from '../YOUTUBE-FETCH/Accets/feedback.svg'



const Index = () => {
  return (
    <div>

    <nav class="navbar">
        <div class="menu">
        <img  src={menu} alt="aa" height={30} width={100}/> 
        </div> 
        
        {/* youtube logo */}
        <img  src={logoSVG} alt="aa" height={100} width={100} className='youtube-logo'/> 

        {/* search box */}
 
            <input type="text" class="search-bar" placeholder="search" />
            <button class="search-btn"><img src= {search} alt="aa" height={100} width={100}/></button>





       {/* ......side-navbar..... */}

        <div class="top-right">
            <img src={newVideoSVG} class="icon" alt="aa" />
            <img src={appsSVG} class="icon" alt="aa" />
            <div class="user-dp"> 
                <img src={notificationsSVG} alt="aa" />
            </div>
        </div>
    </nav>



    {/* <!-- sidebar --> */}
    {/* <div class="side-bar">

       
        <a href="#" class="links active"><img src={home} alt="aa" />home</a>
        <a href="#" class="links"><img src={library} alt="aa" />explore</a>
        <a href="#" class="links"><img src={subscription} alt="aa" />subscription</a>
        <hr class="seperator" />

        <h3 className='titles'>You</h3>
        <a href="#" class="links"><img src={library} alt="aa"/>library</a>
        <a href="#" class="links"><img src={history} alt="aa"/>history</a>
        <a href="#" class="links"><img src={likedVedio} alt="aa"/>your video</a>
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
        
    </div>  */}

    

    
    </div>
    
  )
}

export default Index