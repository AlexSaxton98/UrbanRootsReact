import './Homepage.css'
import Featured from '../components/Featured'

import Product from "../components/product"

const Homepage = () => {
    return (
        <div className="home">
            <div className="content_homepage">
                <Featured />
                <Product />
            </div>
        </div>
    )
}

export default Homepage
