import "./topbar.scss"
import {Person,Mail} from '@mui/icons-material';

export default function topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+44 924 12 74</span>
                        </div>
                    <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>Dre@genius.com</span>
                </div>
                </div>
                <div className="right"></div>

            </div>
        </div>
    )
}
