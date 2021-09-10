
import './MoreOptionToday.css'

const MoreOptionToday = ({ item }) => {
  console.log(item);
  var SRD = new Date(item.data.sys.sunrise * 1000);
  var SAM = new Date(item.data.dt * 1000);

  return (
    <div className="more-option">
      <div className="country">
        <span>Country:</span>
        {item.data.sys.country}
      </div>
      <div className="information">
        <span>Description:</span>
        {item.data.weather[0].description}
      </div>
      <div className="wind">
        <span>SpeedWind:</span>
        {item.data.wind.speed}m/s
      </div>
      <div className="humidity">
        <span>Humidity:</span>
        {item.data.main.humidity}%
      </div>
      <div className="sunrise">
        <span>Sunrise:</span>
        {SRD.getHours() + ":" + SRD.getMinutes()}
      </div>
      <div className="sunset">
        <span>SunSet:</span>
        {SAM.getHours() + ":" + SAM.getMinutes()}
      </div>
    </div>
  );
};

export default MoreOptionToday;
