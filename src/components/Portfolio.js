import GitHub from '../assets/github.svg';
import LinkedIn from '../assets/linkedin-icon.png'
import Typing from './Typing';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className='div'>
            
            <h1 className='h1' id='h1'>Syed Ayaan Ali</h1>
            <div className='header'>
                <Typing 
                    text={[
                        "I'm a Coder",
                        "I'm a AI/ML Enthusiast",
                        "I'm a Programmer",
                        "I'm a Web Developer"
                    ]}
                    typingspeed={100}
                    deletingspeed={50}
                    duration={1000}
                />
            </div>
            <div className="Nav">
                <ul className="NavList">
                    <li className='tree'>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Education">Education</Link>
                    </li>
                    {/* <li>
                        <Link to="/Experience">Experience</Link>
                    </li> */}
                    {/* <li>
                        <Link to="/Projects">Projects</Link>
                    </li> */}
                    <li>
                        <Link to="/Skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='Image'>
                <a href="https://www.linkedin.com/in/syed-ayaan-ali-5ba37b296" id='linkedin'>
                    <img src={LinkedIn} alt="LinkedIn" style={{ height: '50px', width: '50px' }} />
                </a>
                <a href="https://github.com/SyedAyaanAli6786" id='Github'>
                    <img src={GitHub} alt="GitHub" style={{ height: '50px', width: '50px' }} />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
