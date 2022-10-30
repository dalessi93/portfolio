import './style/Footer.css';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export function Footer(){
    return(
        <div className="footer">
            <div className="socials">
                <ul>
                    <li><a href='https://github.com/dalessi93' target="_blank"><FiGithub/></a></li>
                    <li><a href='https://www.linkedin.com/in/daniel-alessi-en/' target="_blank"><FiLinkedin/></a></li>
                </ul>
            </div>
            <div className="email">
                <a href="mailto:danialessi93@hotmail.com">danialessi93@hotmail.com</a>
            </div>
        </div>
    )
}