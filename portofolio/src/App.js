import React, {Component} from 'react';
class App extends Component{
  constructor(){
    super();
    this.state ={displayBio:false};
    console.log('component this', this)
    this.readMore = this.readMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }
  readMore(){
    console.log('readMore this', this);
    this.setState({ displayBio: true})
  }
  showLess(){
    this.setState({displayBio: false})
  }
  render(){
    const bio = this.state.displayBio ?(
<div>
        <p>I live in Bowie MD</p>
        <p>My favorite language is JavaScript, and I am excited about react</p>
        <button onClick={this.showLess}>Show less</button>
      </div>
    ):(
      <div>
        <button onClick={this.readMore} >Read more</button>
      </div>
    )

    
    return(
      <div>
        <h1>Hello!</h1>
          <p>Kesete Beraki</p>
          <p>Software developer</p>
          <p> Coding to change to the world!</p>
      
      {bio}
      </div>
    )
  }
}
export default App;