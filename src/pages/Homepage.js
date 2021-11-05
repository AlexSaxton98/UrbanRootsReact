import './Homepage.css'

import Featured from '../components/Featured'
import Product from "../components/product1"



const Homepage = () => {
    

    return (
        <div className="home">
            <div className="content">
                <Featured />
                
                {[...Array(5).keys()].map(num => <Product id={num} />)}
                
               
                
            </div>
        </div>
    )
}


export default Homepage
