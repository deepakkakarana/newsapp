import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

  
  constructor(){
    super();
    console.log("Hello ,this is constructor from news compoent ");


    this.state ={
    articles:[],
    loading:false
    }

}

  async componentDidMount(){
    console.log('This is component did mount');
    let url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=cd75e7ec3ae74a2abec1c5608dcc57d5"
    let data= await fetch(url);
    let parseddata= await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles})
  }


  render() {
    return (
      <div>

        <div className="container">

          <div className="row">
          {this.state.articles.map((element)=>{
            return  <div className="col" key={element.url}>
            <Newsitem   tittle={element.title? element.title:""} description={element.description ?element.description:""} urlToImage={element.urlToImage}  />

            </div>
          
          })}
          
          </div>

          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} class="btn btn-primary" type="button">{"<<Privious"}</button>
            <button disabled={this.state.page>=31} class="btn btn-primary" type="button">{"Next>>"}</button>
          </div>
          
        </div>
      
          
      </div>
    )
  }
}
