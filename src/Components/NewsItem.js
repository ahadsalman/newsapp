import React, { Component } from 'react'

export class NewsItem extends Component {
  
  
    render() {
let {title, description, imgurl,newsUrl,author,date,source} = this.props;

    return (
     <>
     
     <div className="card my-4" style={{width: "18rem", borderRadius: "8px", height:"500px"}}>
     <img src={!imgurl?'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg':imgurl}  style={{
          width: "100%",          // Make image fill the card width
          height: "200px",         // Set a fixed height
          objectFit: "cover",      // Crop and center the image within the dimensions
          borderRadius: "8px"      // Optional: Rounded corners
        }} className="card-img-top" alt="..."/>
     <div className="card-body">
     <span style={{left:"85%"}} class="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
   {source}
    <span class="visually-hidden">unread messages</span>
  </span>
       <h5 className="card-title">{!title?"null`":title}...</h5>
       <p className="card-text">{!description?"Description not available, find out more about the news through the button below":description}...</p>
       <p className="card-text"><small className="text-body-secondary">Author: {(!author?"unknown":author+"..").slice(0,25)}, Date: {new Date(date).toGMTString()}</small></p>
       <a href = {newsUrl} rel="noreferrer" target="_blank"   style={{ position: 'absolute', bottom: '10px', left: '10px' }} className="btn btn-sm btn-primary" >Read more</a>
     </div>
   </div>
   
   </>
    )
  }
}

export default NewsItem
