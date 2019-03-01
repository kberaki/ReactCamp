import React, {Component} from 'react';
import Projects from './Projects';
class App extends Component{
  constructor(){
    super();
    this.state ={displayBio:false};
    //console.log('component this', this)
    //this.readMore = this.readMore.bind(this);
    //this.showLess = this.showLess.bind(this);
    this.toggleDisplayBio= this.toggleDisplayBio.bind(this);
  }
  /*readMore(){
    console.log('readMore this', this);
    this.setState({ displayBio: true})
  }
  showLess(){
    this.setState({displayBio: false})
  }*/
  toggleDisplayBio(){
    this.setState({displayBio:!this.state.displayBio})
  }
  render(){
    const bio = this.state.displayBio ?(
        <div>
        <p>I live in Bowie MD</p>
        <p>My favorite language is JavaScript, and I am excited about react</p>
      <div>
        <button onClick={this.toggleDisplayBio}>Show less</button>
      </div>
      </div>
    ):(
      /*<div>
        <button onClick={this.readMore} >Read more</button>
      </div>*/
      <div>
        <button onClick={this.toggleDisplayBio}>Read more</button>
      </div>
    )

    
    return(
      <div>
        <h1>Hello!</h1>
          <p>Kesete Beraki</p>
          <p>Software developer</p>
          <p> Coding to change to the world!</p>
      
      {bio}
      <hr />
     <Projects />
      </div>
    )
  }
 
}
export default App;