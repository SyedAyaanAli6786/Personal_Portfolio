import Image from '../assets/Photo.jpg';
import './About.css';
import Navbar from './Navbar';

function About() {
    let interestsList = [
        "Web Development",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Science",
        "Software Development",
        "Data Structures",
    ]
    return (
        <div>
            <Navbar />
            <div>
                <h2 id='h22'>ABOUT ------------</h2>
            </div>
            <div className='section1'>
                <img className='img' src={Image} alt='Ayaan' />
                <div className='indefine'>

                    <p className='p'>
                        Hello! I'm a programmer passionate about turning complex problems into simple, beautiful, and intuitive solutions. With a knack for coding and a constant desire to learn, I enjoy exploring new technologies and improving my skills. Whether it's developing web applications, automating tasks, or solving unique challenges, I love what I do and am always eager to take on new projects. Let's create something amazing together!
                    </p>
                    <div id='h41'>

                        <h4>
                            <span className="green">{'>'}</span> Birthday: 2nd May 2004
                        </h4>


                        <h4>
                            <span className="green">{'>'}</span> City: Gaya, Bihar
                        </h4>

                    </div>
                    <div id='h42'>
                        <h4>
                            <span className="green">{'>'}</span> Phone: 9430029400
                        </h4>
                        <h4>
                            <span className="green">{'>'}</span> Email: aliaayan6786@gmail.com
                        </h4>

                    </div>
                </div>
                <div>
                </div>
            </div>
            <h2 id='h22'>INTERESTS</h2>
            <div className="container">
                <div className="interests">
                    <div className="interest-grid">
                        {/* <div className="interest-item">
                            <span>Software Development</span>
                        </div> */}
                        {
                            interestsList.map((interest) => {
                                return (
                                    <div className="interest-item" key={interest}>
                                        <span>{interest}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About