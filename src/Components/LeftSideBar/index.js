import './index.css'
import { FaQuestion } from "react-icons/fa6";
import { IoBagOutline, IoDocumentTextOutline  } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import { BsMegaphone } from "react-icons/bs";
import { RiExchangeBoxLine } from "react-icons/ri";
import { MdForwardToInbox } from "react-icons/md";

const LeftBar = () => {
    return(
        <div className="left-bar-container">
            <img className="left-bar-logo" src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt="logo"  />
            <p className='p-select'><FaQuestion /> QUESTIONS</p>
            <p><IoBagOutline /> JOBS</p>
            <p><IoDocumentTextOutline /> DOCUMENTATION</p>
            <p><GoTag /> TAGS</p>
            <p><LuUser2 /> USERS</p>
            <p><SlBadge /> BADGES</p>
            <p><BsMegaphone /> ASK QUESTION</p>
            <p><RiExchangeBoxLine /> STACK EXCHANGE</p>
            <p><MdForwardToInbox /> INBOX</p>
        </div>
    )
}

export default LeftBar

