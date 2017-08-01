import React from 'react';
import micSource from '../mic.gif';
import micStart from '../mic-animate.gif';
class Speech extends React.Component {
  constructor(props){
    super(props);
    this.state={micImage: micSource, listening:false, recognition:""}
    this.startSpeaking=this.startSpeaking.bind(this);
    this.grammar = '#JSGF V1.0; grammar colors; public <color> = Weather | Forecast | Temperature | Mausam | Tapman ;'
    this.speechRecognitionList = new webkitSpeechGrammarList();
    this.speechRecognitionList.addFromString(this.grammar, 10);
    this.recognition = new webkitSpeechRecognition();
    this.recognition.grammars = this.speechRecognitionList;
    this.recognition.continuous = true;
    //this.recognition.interimResults = true;
   
  }
startSpeaking(e){
  e.stopPropagation();
if(this.state.listening){
     this.setState({micImage: micSource,listening:false});
     this.recognition.stop();
  } else {
    this.startRecording();
  }
}
  

startRecording(){
  this.recognition.start();
  this.recognition.onstart = () => {
     this.setState({micImage: micStart,listening:true});
  };
  this.recognition.onresult = (event) => { 
    console.log('result',event.results[0][0].transcript);
    const word = event.results[0][0].transcript.split(" ");
    var obj = {type:'speech'}
    this.props.getSpeech(word[word.length-1]);
  }
  
}
  render() {
    
    return (
        <div onClick={this.startSpeaking}>
        <img className='speechMic' src={this.state.micImage} alt='mic'/>
        </div>)
  }
}

Speech.defaultProps = {
  getSpeech: '',
};

Speech.propTypes = {
  getSpeech: React.PropTypes.function,
}

export default Speech;