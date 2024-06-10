import github from '../assets/github.svg'
import email from '../assets/envelope-solid.svg'
import location from '../assets/location-dot-solid.svg'
import phone from '../assets/phone-volume-solid.svg'
import share from '../assets/share-nodes-solid.svg'
import LinkedIn from '../assets/linkedin.svg'
import './Contact.css'
import Navbar from './Navbar'
function Contact(){
    return(
        <div>
            <Navbar />
            <br/>
            <br/>
            {/*<h2 id='h22'> Contact-------</h2>*/}
            <div className="Contacts">
                <ul className="Contact1">
                    <div className='locate'>
                        <img src={location} id='location' alt='location'/>
                        <h3 id='h3'>My Address</h3>
                    </div>
                    <div className='li'>
                        <li>Electronic City-Phase1</li>
                        <li>Karnataka</li> 
                        <li>India</li>
                    </div>
                </ul>
                <ul className="Contact2">
                    <div className='Social'>
                        <img src={share} id='social' alt='social' />
                        <h3 id='h4'>Social Profiles</h3>
                    </div>
                    <div className='img'>
                        <a href='https://github.com/SyedAyaanAli6786/'>
                            <img src={github} id='git' alt='github' />
                        </a>
                        <a href='https://www.linkedin.com/in/syed-ayaan-ali-5ba37b296/'>
                            <img src={LinkedIn} id='Linked' alt='linkedin' />
                        </a>
                    </div>
                </ul>
            </div>
            <div className='Contacts1'>
                <div className='Contact3'>
                    <div className='email'>
                        <img src={email} id='email' alt='email' />
                        <h3 id='h4'>Email</h3>
                    </div>
                    <div className='lii'>
                        <li id='liii'>aliaayan6786@gmail.com</li>
                    </div>
                </div>
                <div className='Contact4'>
                    <div className='contact'>
                        <img src={phone} id='phone' alt='phone' />
                        <h3 id='h4'>Contact</h3>
                    </div>
                    <li id='contact'>+91 9430029400</li>
                </div>
            </div>
        </div>
    )
}
export default Contact