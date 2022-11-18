import { GeoLocationModel } from './app';
import './app.module.scss';
const getSeason = (geolocation: GeoLocationModel, month: number) => {
  if (month > 2 && month < 9) {
    return geolocation.lat > 0 ? 'summer' : 'winter';
  } else {
    return geolocation.lat > 0 ? 'winter' : 'summer';
  }
};

const getDesctiption :(season:string)=>{text:string, icon:string}= (season:string)=>{
    return season === 'winter' ? {text:'Burr, it is chilly', icon:'snowflake icon season-view'}: {text:'Lets hit the beach', icon:'sun icon season-view'};
};
const SeasonDisplay = (props: GeoLocationModel) => {
  const season: string = getSeason(props, new Date().getMonth());

  const description = getDesctiption(season);

  return <div className='centered-text'>
    <i className={description.icon } style={{gridArea:'icon'}}/>
    <h1 className='season-text season-view'> {description.text}</h1>;
    <i className={description.icon} style={{gridArea:'icon-bottom'}}/>
  </div> 
};
export default SeasonDisplay;
