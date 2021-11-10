import { Link } from "react-router-dom"
import './Splash.css'

const Splash = () => {
    return (
        <div className="splash_bg">
            <div className="splash_content">
                <h1 className="splash_title">Urban Roots</h1>
                <button className="splash_button"> <Link to="/home">Shop Now</Link></button>
            </div>
        </div>
    )
}

export default Splash
