import React from 'react';
import './Home.css'; 

const Home = () => {
  let obj = [
    {
      video: 'https://www.youtube.com/embed/zNj8XNswU-8',
      title: "youtube clone 2021 | create working youtube clone",
      channelname: "modern web"
    },
    {
      video: 'https://www.youtube.com/embed/-t5b7MrWENk' ,
      title : "Adhento Gaani Vunnapaatuga - Full Video | JERSEY | Nani, Shraddha Srinath | Anirudh Ravichander" ,
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/mt1_HX34fEA",
      title : "Phir Bhi Tumko Chaahunga - Full Song | Arijit Singh | Arjun K &amp; Shraddha K | Mithoon, Manoj M",
      channelname: "modern web"
    },
    {
      video: 'https://www.youtube.com/embed/mF2BHtQh4EI',
     title : "Shayad - Love Aaj Kal | Kartik Aryan | Sara Ali Khan | Randeep Hooda | Pritam | Arijit Singh | 4K",
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/0u3B2LZJgMc",
      title : "Full Video: Nanna Nuv Naa Pranam | ANIMAL | Ranbir K,Rashmika | Sonu Nigam,AnanthaS |Sandeep Reddy V",
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/9ZB0B36NW9I" ,
      title : "Tera Chehra (Full Audio Song) | Sanam Teri Kasam | Harshvardhan, Mawra | Himesh",
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

export default Home;

