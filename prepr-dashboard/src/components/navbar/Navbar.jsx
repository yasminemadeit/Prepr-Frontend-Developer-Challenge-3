import './navbar.scss';
import SearchBar from '../SearchBar';
import notification from '../../assets/images/notification-darkmd.png';
import chat from '../../assets/images/chat-dark-md.png';
import help from '../../assets/images/help-darkmd.png';
import user from '../../assets/images/user-dark-md.png';
import hamburger from '../../assets/images/hamburger-darkmd.png';


function Navbar() {

    return(
        <div className="navbar">
            <div className="nav-left">
                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/logoNew.png" />
                <ul>
                    <li className="nav-item">Challenges</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Labs</li>
                </ul>
               
            </div>
            <div className="nav-right">
                <ul>
                    <li className="nav-icon">
                    <img src={notification} alt="" />
                        
                    </li>
                    <li className="nav-icon">
                        <img src={chat} alt="" />
                    </li>
                    <li className="nav-icon">
                        <img src={help}alt="" />
                    </li>

                    <SearchBar />
                    <li className="profile-dropdown">
                    <img src={user}alt="" />
                    </li>
                    <li className="menu-dropdown">
                    <img src={hamburger}alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar