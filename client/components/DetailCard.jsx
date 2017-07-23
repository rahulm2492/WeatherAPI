import React from 'react';


class DetailCard extends React.Component {
  constructor(props){
    super(props);
  }
 

  render() {
    const propData = this.props.tempData;
    const {temp_min,temp_max,humidity,temp} = propData.main;
    const {dt_txt}=propData;
    const{weather}=propData;
       return (
         <div className="col-md-2 col-xs-12 temp-card">
            <div className="date">{dt_txt.split(" ")[0]}</div>
            <div>
            <label className="control-label">Temp</label>
            <span className="form-control-static">{temp}</span>
           </div>
           <div>
            <label className="control-label">Min Temp</label>
            <span className="form-control-static">{temp_min}</span>
           </div>
           <div>
            <label className="control-label">Max Temp</label>
            <span className="form-control-static">{temp_max}</span>
           </div> 
            <div>
            <label className="control-label">Humidity</label>
            <span className="form-control-static">{humidity}</span>
            </div>
            <div>
            <label className="control-label">Weather</label>
            <span className="form-control-static">{weather[0].description}</span>
           </div> 
            
        </div>
       );
  }
}


DetailCard.defaultProps = {
  tempData: '',
};

DetailCard.propTypes = {
  tempData: React.PropTypes.string,
}

export default DetailCard;