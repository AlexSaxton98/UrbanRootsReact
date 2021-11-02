import './Featured.css'
import Item from './Item'

const Featured = () => {
    return (
        <div className="container">
            <p>Check out our featured items</p>
            <div className="cards">
                <Item />
                <Item />
                <Item />
            </div>

        </div>
    )
}

export default Featured
