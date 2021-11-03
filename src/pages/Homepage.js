import './Homepage.css'
import Featured from '../components/Featured'
import Product1 from "../components/product"


const Homepage = () => {

    return (
        <div className="home">
            <div className="content">
                <Featured />
                
                <Product1 />
                
            </div>
        </div>
    )
}

export default Homepage
