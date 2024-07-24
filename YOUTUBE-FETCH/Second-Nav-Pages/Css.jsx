import React from 'react';
import './Css.css'; 

const Css = () => {
  let obj = [
    {
      video: 'https://www.youtube.com/embed/ESnrn1kAD4E',
      title : "CSS Tutorial for Beginners | Complete CSS with Project, Notes &amp",
      channelname: "modern web"
    },
    {
      video:"https://www.youtube.com/embed/OXGznpKZ_sA",
      title : "CSS Tutorial – Full Course for Beginners",
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/1PnVor36_40",
      title : "Learn CSS in 20 Minutes",
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/EUtlj7xdO1o",
      title : "CSS Tutorial For Beginners In Hindi | CSS In One Shot",
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/KBHeypHgv_0",
       title : "CSS flexbox  | flexbox  in CSS | CSS flex property in Telugu | CSS flex |CSS tutorials | css flex",
      title : "Full Video: Nanna Nuv Naa Pranam | ANIMAL | Ranbir K,Rashmika | Sonu Nigam,AnanthaS |Sandeep Reddy V",
      channelname: "modern web"
    },
    {
      video: "https://www.youtube.com/embed/2sgZmEw5nis" ,
       title : "CSS Tutorial  : Introduction to CSS | Complete HTML CSS JavaScript Course" ,
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

export default Css;
