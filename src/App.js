import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Home from './components/Home';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode:'light',
    }
  }
  togglebtn=()=>{
    if (this.state.mode==='light'){
      document.body.style.backgroundColor='black';
      this.setState({
        mode:'dark'
      })
    }else{
      document.body.style.backgroundColor='white';
      this.setState({
        mode:'light'
      })
    }
  }
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    const router=createBrowserRouter([
      {
        path:"/",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
      <News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'general'}/></>
      },
      {
        path:"/home",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <Home mode={this.state.mode}/><News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'general'}/></>
      },
      {
        path:"/business",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'business'}/></>
      },
      {
        path:"/entertainment",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'entertainment'}/></>
      },
      {
        path:"/general",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'general'}/></>
      },
      {
        path:"/health",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'health'}/></>
      },
      {
        path:"/science",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        /><News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'science'}/></>
      },
      {
        path:"/sports",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'sports'}/></>
      },
      {
        path:"/technology",
        element:<><Navbar mode={this.state.mode} togglebtn={this.togglebtn}/><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <News setProgress={this.setProgress} apikey={this.apikey} pagesize={20} country={'in'} category={'technology'}/></>
      }
    ])
    return (
      <div>
        <RouterProvider router={router}/>
      </div>
    )
  }
}
