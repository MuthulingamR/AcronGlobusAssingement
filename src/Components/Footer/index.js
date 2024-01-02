import './index.css';

import { FaTwitter, FaFacebook  } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='footer-header'>
                <div className='footer-header-1'>
                    <p className='footer-header-paras'>about us</p>
                    <p className='footer-header-paras'>tour</p>
                    <p className='footer-header-paras'>help</p>
                    <p className='footer-header-paras'>blog</p>
                    <p className='footer-header-paras'>chat</p>
                    <p className='footer-header-paras'>data</p>
                    <p className='footer-header-paras'>legal</p>
                    <p className='footer-header-paras'>privacy policy</p>
                    <p className='footer-header-paras'>work here</p>
                    <p className='footer-header-paras'>advertising info</p>
                    <p className='footer-header-paras'>mobile</p>
                    <p className='footer-header-paras'>contact us</p>
                    <p className='footer-header-paras'>feedback</p>
                </div>
                <div className='footer-icons-container'>
                    <FaTwitter className='footer-icon' />
                    <FaFacebook className='footer-icon' />
                    <CiBasketball className='footer-icon' />
                </div>
            </div>
            <hr/>
            <div className='footer-bottom'>
                <div>
                    <h1 className='footer-heading'>TECHNOLOGY</h1>
                    <p className='footer-header-para'>Stack Overflow</p>
                    <p className='footer-header-para'>Serev Fault</p>
                    <p className='footer-header-para'>Super User</p>
                    <p className='footer-header-para'>Web Applications</p>
                    <p className='footer-header-para'>Ask Ubuntu</p>
                    <p className='footer-header-para'>Webmaster</p>
                    <p className='footer-header-para'>Game Developement</p>
                    <p className='footer-header-para'>TeX- LaTex</p>
                    <p className='footer-header-para footer-highlight'>50+ more</p>
                </div>

                <div>
                    <h1 className='footer-heading'>LIFE / ARTS</h1>
                    <p className='footer-header-para'>Photograph</p>
                    <p className='footer-header-para'>Science Fiction & Fantasy</p>
                    <p className='footer-header-para'>Graphic Design</p>
                    <p className='footer-header-para'>Movies & TV</p>
                    <p className='footer-header-para'>Seasoned Adivce (cooking)</p>
                    <p className='footer-header-para'>Home Improverment</p>
                    <p className='footer-header-para'>Personal Finance & Money</p>
                    <p className='footer-header-para footer-highlight'>19 more</p>
                </div>

                <div>
                    <h1 className='footer-heading'>CULTURE / RECREATION</h1>
                    <p className='footer-header-para'>English Lanuage & Usage</p>
                    <p className='footer-header-para'>Skeptics</p>
                    <p className='footer-header-para'>Mi Yodeya (Judaism)</p>
                    <p className='footer-header-para'>Travel</p>
                    <p className='footer-header-para'>Christianity</p>
                    <p className='footer-header-para'>arqade (gaming)</p>
                    <p className='footer-header-para'>Bicycles</p>
                    <p className='footer-header-para footer-highlight'>21 more</p>
                </div>

                <div>
                    <h1 className='footer-heading'>SCIENCE</h1>
                    <p className='footer-header-para'>Mathematics</p>
                    <p className='footer-header-para'>Croos Validated (stats)</p>
                    <p className='footer-header-para'>Theoretical Computer Science</p>
                    <p className='footer-header-para'>Physics</p>
                    <p className='footer-header-para'>MathOverflow</p>
                    <p className='footer-header-para'>Chemistry</p>
                    <p className='footer-header-para'>Biology</p>
                    <p className='footer-header-para footer-highlight'>5 more</p>
                </div>

                <div>
                    <h1 className='footer-heading'>OTHER</h1>
                    <p className='footer-header-para'>Stack Apps</p>
                    <p className='footer-header-para'>Meta Stack Exchange</p>
                    <p className='footer-header-para'>Area 51</p>
                    <p className='footer-header-para'>Stack Overflow Carrers</p>
                </div>
            </div>
            <hr/>
        </div>   
    )
}

export default Footer