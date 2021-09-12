
import './Header.css'

const Header = () => {
  return (
    <div className="icon-header">
      <div className="right-side">
        <div className="clock">{new Date().toLocaleTimeString()} </div>
        <div className="notification">
          <i class="far fa-bell-slash"></i>
        </div>
      </div>
      <div className="left-side">
        <div className="signal">
          <i class="fas fa-signal"></i>
        </div>
        <div className="charge">
          <i class="fas fa-battery-three-quarters"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
