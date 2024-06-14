import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps={
    country:'in',
    pagesize:20,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
  
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  updatenews=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32e909c5e6b2414eb8c978b33e6051ba&page=${this.props.page}&pagesize=${this.props.page}`;
    this.props.setProgress(20);
    this.setState({
      loading:true
    })
    let data =await fetch(url);
    let response=await data.json();
    this.setState({
      articles:response.articles,
      loading:false
    })
    this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updatenews();
  }

  previousbtn=async()=>{
    this.setState({
      page:this.state.page-1
    })
    this.updatenews();
  }

  nextbtn=async()=>{
  this.setState({
    page:this.state.page+1
  })
  this.updatenews();
  }
  fetchMoreData=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32e909c5e6b2414eb8c978b33e6051ba&page=${this.props.page}&pagesize=${this.props.page}`;
    
    setTimeout(async()=>{
      let data =await fetch(url);
      let response=await data.json();
      this.setState({
      articles:this.state.articles.concat(response.articles),
      totalResults:response.totalResults,
      page:this.state.page+1,
      loading:false
    })
    },1000)
  }
  render() {
    return (
      <>
      <div className="container my-4 " style={{marginLeft:'70px'}}>
        <h1 style={{color:this.props.mode==='dark'?'white':'black'}}>Top-HeadLines in {this.props.category.toUpperCase()}</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />}>

          <div className="container">
            <div className="row-md-4">
             {this.state.articles.map((element)=>{
              return <div className="col" key={element.url}>
                      <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,85):""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} page={this.state.page} source={element.source.name}/>
                    </div>
            })}
           </div>
        </div>
        </InfiniteScroll>
        
      </div>
      {!this.state.loading &&
      <div className="container my-4" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          style={{marginRight:'10px'}}
          onClick={this.previousbtn}
          disabled={this.state.page<=1}
        >
           &larr; Previous Results
        </button>
        <button
          type="button"
          className="btn btn-primary"
          style={{marginRight:'10px'}}
          onClick={this.nextbtn}
          disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)}
        >
          More Results &rarr;
        </button>
      </div>
      }
    </>
    )
  }
}
