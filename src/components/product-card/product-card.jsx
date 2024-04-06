
import './product-card.scss'
// import data from '../../assets/data-mock/products.json'

function ProductCard({products}) {

    // console.log(data);
    // const products = data.products;
    const productCard = products.map((product, index) => (
        <div className="product-card">
            <img className="product-card__img" src={product.image} key={index} alt={product.name}/>
            <div className="product-card__desc" disabled={product.owned}>
                <span className="name">{product.name}</span>
                <div className="info-box">
                    <span className="discount" >-{product.discount}%</span>
                    { !product.owned ?
                         <button
                         className="button action"
                         //  (click)="addToCart(product)"
                         disabled={product.inCart}
                         >
                             {product.inCart ? "in cart" : "$" + product.price }
                         </button>
                    : <span className="action">owned</span>
                    }
                </div>
            </div>
        </div>
    ))

    return (
        <div className="products">
            {productCard}
        </div>

    )
}

export default ProductCard