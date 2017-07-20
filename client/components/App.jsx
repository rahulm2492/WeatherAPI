import React from 'react';
import WeatherUI from './WeatherUI.jsx'
import {errorAfterFiveSeconds} from '../actions';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={clicked:0}
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
     this.setState({clicked:nextProps.count.id});
  }
  render() {
    console.log(this.state.clicked);
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Click:{this.state.clicked} </h1>
        <button onClick={this.props.onTodoClick}>Click Me</button>
        <WeatherUI/>
      </div>);
  }
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(errorAfterFiveSeconds(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);