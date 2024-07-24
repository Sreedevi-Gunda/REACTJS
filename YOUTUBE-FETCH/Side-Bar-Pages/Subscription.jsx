import React from 'react';
import './Subscription.css'; 

const Subscription = () => {
  let obj = [
    {
      video: "https://www.youtube.com/embed/kvTEzs8eirU" ,
      title : "Accenture Complete Hiring Process 2024 | Aptitude Exam To Joining | Step By Step Process",
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/Xd_HM-RJmfI" , 
      title : "Flipkart Recruitment 2024 | Flipkart From Home Jobs |12th Pass Jobs|Online Work From Home Job |April" ,
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/Yh9OXmldCIY" ,
      title : "How I got 24 Lakhs CTC in Tier 3 College | OFF Campus | From *ZERO* Knowledge",
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/gun38ygHKMk",
      title : "TCS BPS Registration Process | TCS BPS Hiring 2024 |  TCS Recruitment 2024 For Fresher",
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/jj1Kst-i668" ,
      title : "I failed Engineering and this happened...",
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/SkT8tDy45fU" ,
      title : "How I started coding from 0 and cracked Amazon, Google &amp; Maps" ,
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/e4N9al7vhVQ",
      title : "Oosupodu Full Video Song || Fidaa Full Video Songs || Varun Tej, Sai Pallavi || Sekhar Kammula",
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/IJq0yyWug1k" ,
      title : "&quot;Tum Hi Ho Aashiqui 2&quot; Full Video Song HD | Aditya Roy Kapur, Shraddha Kapoor | Music - Mithoon",
      channelname: "modern web"
    },
    {
      video: 'https://www.youtube.com/embed/TQ-B5df2Le8',
      title : 'Tholiprema Full Video Song | Tholi Prema Video Songs | Varun Tej, Raashi Khanna | SS Thaman',
      channelname: "modern web"
    },    {
      video: 'https://www.youtube.com/embed/KqryYWNY2Bk',
      title : 'Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan_ Kriti Sanon_ Sachin-Jigar_Arijit Singh',
      channelname: "modern web"
    },
    {
      video: 'https://www.youtube.com/embed/K-Ts-NFR62o',
      title : 'JAB TAK Full Video | M.S. DHONI -THE UNTOLD STORY | Armaan Malik |Sushant Singh Rajput',
      channelname: "modern web"
    },
    {
      video: 'https://www.youtube.com/embed/Mz7ktiWuY5g',
      title: 'Darshan Raval - Tera Zikr(Official 4K Video)',
      channelname: "modern web"
    }
  ];

  return (
    <div className='videos'>
      {obj.map((video) => (
        <div>
          <iframe 
            // title={video.title} 
            src={video.video} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen style={{borderRadius: "20px"}}></iframe>
          <h4>{video.title}</h4>
          <br />
          <p>{video.channelname}</p>
        </div>
      ))}
    </div>
  );
};

export default Subscription;

