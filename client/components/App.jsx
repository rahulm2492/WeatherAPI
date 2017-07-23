import React from 'react';
import WeatherUI from './WeatherUI.jsx'
import Header from './Header.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    return (
     <div className='weatherUI container'>
        <Header/>
        <WeatherUI/>
      </div>);
  }
}



export default App;