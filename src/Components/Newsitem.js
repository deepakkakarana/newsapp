import React, { Component } from 'react'
import './Newsitem.css'

export default class Newsitem extends Component {
  render() {
    let {title, description,urlToImage,}=this.props
    return (
      <>
      <div className="card my-5" style={{width:"18rem"}}>
        <img src={urlToImage} className="card-img-top" alt=""/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/" className="btn btn-success">Click Here</a>
        </div>
</div>
      </>       
    )
  }
}
