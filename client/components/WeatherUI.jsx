import React from 'react';
import DetailCard from './DetailCard.jsx';
import {getCountryFromZip, byName, onSearch} from '../actions';
import {connect} from 'react-redux';
import logo from "../loader.gif";
class WeatherUI extends React.Component {
  constructor(props){
    super(props);
    this.state={cityName:'', data:'', radioInput:''};
    this.setName=this.setName.bind(this);
    this.getData=this.getData.bind(this);
    this.getRadioInput=this.getRadioInput.bind(this);
  }

  setName(e){
     this.setState({cityName:e.target.value});
  }

  getData(e){
    
    if(e.key == 'Enter' || e.type=='click') {
      this.props.clickSearch();
      this.props.onName(this.state.cityName);
      }
  }

  componentWillReceiveProps(nextProp){
     this.setState({data:nextProp.data});
  }
  getRadioInput(e){
  
   this.setState({radioInput:e.target.value});
  }
  card(data){
    let cards = [], j=0;;
    const cardNumbers = data.list &&( data.list.length/8);
    const averageDataLength = data.list && (data.list.length%8);
    for(let i =0;i<5;i++){
       cards.push(<DetailCard key={i} tempData={data.list && data.list[j]}/>);
       j=j+8;

    }
    return cards;
  }

  render() {
     let city;
      if(this.state.data){
        city = this.state.data && this.state.data.city
      } else {
        city = null
      }
       return (
        <div className="row margin-zero">
          {this.props.loading ? (<div className="loader"/>) :null}
          <div className="col-xs-12 col-md-4 center-align">
            <h3 className='heading_color'>Select Search Type</h3>
            <label className="radio-inline">
              <input type="radio" value='city_name' onClick={this.getRadioInput} name="optradio" className="radio_pos" defaultChecked={true}/>City Name
            </label>
            <label className="radio-inline">
              <input type="radio" value='zip_code' onClick={this.getRadioInput} className="radio_pos" name="optradio"/>ZipCode
            </label>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" id="txtSearch" onChange={this.setName} onKeyPress={this.getData}/>
                <div className="input-group-btn" >
                      <button className="btn btn-primary" onClick={this.getData}>
                      <span className="glyphicon glyphicon-search"></span>
                      </button>
                </div>
            </div>
          </div>
           {this.state.data ?<h3 className='center-align report-heading'>Weather Report For {city && city.name}, {city && city.country}</h3>: null}
         <div className='cards-container'>{this.state.data && this.card(this.state.data)}</div>
        </div>
       );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    loading:state.loading,
    error:state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onZip: id => {
      dispatch(getCountryFromZip(id))
    },
     onName: name => {
      dispatch(byName(name))
     },
     clickSearch:()=>{
       dispatch(onSearch())
     }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherUI);