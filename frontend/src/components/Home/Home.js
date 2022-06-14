import React from "react";
import "C:/Users/DELL/Desktop/capston-pr/cv-generator-app-reactjs/frontend/node_modules/bootstrap/dist/css/bootstrap.min.css";
import image from "C:/Users/DELL/Desktop/capston-pr/cv-generator-app-reactjs/frontend/src/components/images/temp_img.jpg";
import Container from 'react-bootstrap/Container';
import "./Home.css";
const Home = () => {
  return (
    <>
      <div  className="container1" style={{padding:"50px"}} >
        <div class="col-xl-8">
        <h1 style={{ fontWeight: "bold" }}> The online resume builder getting folks hired by Wipro, BBC, Google, Apple, Tesla.</h1> 
      </div>
      </div>


      <div  className="container2" class="row" style={{padding:"30px"}} >
      <div class="col-xl-6"  >
      <h1 style={{ fontWeight: "italic" }}>Build your brand-new resume in as little as 5 minutes.</h1>
      
      <a style={{color: "inherit"}} href="/form"><button style={{backgroundColor:"skyblue",padding:"15px",width:"225px",margin:"100px 200px",fontWeight: "bold",border:"none",borderRadius:"25px"}} className="zoom">Build My Resume</button></a>
    
      </div>
      <div class="col-xl-6" >
       <img  src={image} />
       </div>
      </div>
      
      
    
    </>
  );
};

export default Home;
