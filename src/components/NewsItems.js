import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description ,imageUrl,newsurl,author,date,page,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", boxShadow:'2px 2px 10px grey'}}>
          <img src={!imageUrl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 start-0 badge text-bg-danger" style={{zIndex:'1'}}>{source}</span></h5>
            <div className="card-text">{!description?"A plane carrying Vice President Saulos Chilima and nine others went missing in bad ":description}...<p style={{position:'absolute',right:'5px',bottom:'10px'}}>{page===1?<span className="badge text-bg-secondary">New</span>:""}</p></div>
            <p className="card-text"><small className="text-muted">By {author?author:"Times of India"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
