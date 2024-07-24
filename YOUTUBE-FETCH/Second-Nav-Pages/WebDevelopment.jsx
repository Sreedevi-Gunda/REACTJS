import React from 'react';
import './All.css'; 

const WebDevelopment = () => {
  let obj = [
    {
      video:"https://www.youtube.com/embed/l1EssrLxt7E?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n" ,
      title : "Introduction to Web Development | World&#39;s most premium Web Development Course | Lecture 0 (Reupload)",
      channelname: "modern web"
    },
    {
      video : "https://www.youtube.com/embed/z0n1aQ3IxWI" ,
      title : "What is Web Development ? Complete RoadMap from Basics to Advanced | 2023" ,
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/M93Uf1bMq-o" ,
      title: "What is Web Development ?",
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/nu_pCVPKzTk",
      title : "Full Stack Web Development for Beginners (Full Course on HTML, CSS, JavaScript, Node.js, MongoDB)" ,
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/fUmSkEvet08" ,
      title : "Profitable Web Developer RoadMap - Step by Step | Freelancing, Jobs &amp; AI in Web Development 🔥",
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/j6Ule7GXaRs",
      title : "Learn Web Design For Beginners - Full Course (2024)" ,
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

export default WebDevelopment;
