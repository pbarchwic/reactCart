import './layout.scss'
import witcher from '../../assets/images/witicher.jpg'
import ProductCard from '../product-card/product-card';
import data from '../../assets/data-mock/products.json'


function Layout () {
    return (
        <div className="main">
            <div className="container">
                <span className="header">game of the week</span>
                <img className="big-image" src={witcher} alt='witcher'/>
                <ProductCard products={data.products}></ProductCard>
            </div>
        </div>
    )
}

export default Layout;