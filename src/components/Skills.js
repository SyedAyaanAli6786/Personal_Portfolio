
import Python from '../assets/python.svg';
import Java from '../assets/java.svg';
import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import MySql from '../assets/mysql.svg';
import PostgreSql from '../assets/postgresql.svg';
import django from '../assets/django.svg';
import nodejs from '../assets/nodejs.svg';
import Flask from '../assets/flask.svg';
import git from '../assets/git.svg';
import heroku from '../assets/heroku.svg';
import AmazonGitServices from '../assets/amazon-web-services.svg';
import Jupyter from '../assets/jupyter.svg';
import './Skills.css';
import Navbar from './Navbar';
// import Python from 'ra-icons'

function Skills() {
    return (
        <div>
            <Navbar />
            <br/>
            <br/>
            <br/>
            {/*<h4 id="h22">SKILLS ----------</h4>*/}
            <div className="skills-section1">
                <h2 className="skills-title">Languages and Databases</h2>
                <div className="skills-row1">
                    <img src={Python} alt="Python" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                    <img src={Java} alt="Java" className="skill-iconj"style={{ height: '100px', width: '120px' }}  />
                    <img src={Html} alt="Html" className="skill-iconh" style={{ height: '100px', width: '110px' }} />
                    <img src={Css} alt="Css" className="skill-iconC" style={{ height: '100px', width: '120px' }} />
                    <img src={MySql} alt="MySql" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                    <img src={PostgreSql} alt="PostgreSql" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                </div>
            </div>
            <div className='skills-section2'>
                <h2 className="skills-title">Frameworks</h2>
                <div className="skills-row2">
                    <img src={Flask} alt="Flask" className="skill-iconf" style={{ height: '90px', width: '120px' }} />
                    <img src={django} alt="django" className="skill-icond" style={{ height: '100px', width: '140px' }} />
                    <img src={nodejs} alt="nodejs" className="skill-iconn" style={{ height: '90px', width: '140px' }} />
                </div>
            </div>
            <div className='skills-section3'>
                <h2 className="skills-title">Tools</h2>
                <div className="skills-row3">
                    <img src={git} alt="git" className="skill-icon"style={{ height: '100px', width: '140px' }}  />
                    <img src={AmazonGitServices} alt="AmazonGitServices" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                    <img src={heroku} alt="heroku" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                    <img src={Jupyter} alt="Jupyter" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
