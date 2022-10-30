import {Link} from 'react-router-dom';
import Resume from "./files/DanielAlessiResume.pdf";
import './style/NavBar.css';

export function NavBar(){
    return(
        <div className="navBar">
            <div className="logo">

                <span>Daniel Alessi</span>

            </div>

            <div className="menu">

                <ul>
                    <li>
                        <Link to="about"><span>About</span></Link>
                    </li>
                    <li>
                        <Link to="portfolio"><span>Portfolio</span></Link>
                    </li>
                    <li className="resume-button">
                        <a className="resume-link" href={Resume} target="_blank">Resume</a>
                    </li>
                </ul>

            </div>

        </div>
    )
}