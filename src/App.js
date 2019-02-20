import React, { Component,Suspense,lazy } from 'react';
import Memo from './Memo'
import './App.css';
const Cat =lazy(()=>import('./Cat'))



class App extends Component {
  state={
    showImage:false,
    time:new Date()
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        time:new Date()
      })
    },1000)
  }
 
  showImage =()=>{
    this.setState({
        showImage:true
    })
}

hideImage =()=>{
    this.setState({
        showImage:false
    })
}

  render() {
    if(!this.state.showImage){
      return (
        <div className="App">
          <header className="App-header">
              <button onClick={this.showImage}>Show</button>
          </header>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <header className="App-header">
          <div>
            <Memo seconds={1}/>
            {this.state.time.toString()}
          </div>
            <Suspense fallback={<div>Loading...</div>}>
               <Cat/>
            </Suspense>
            <button onClick={this.hideImage}>Hide</button>
          </header>
        </div>
      );
    }
  }
}

export default App;
