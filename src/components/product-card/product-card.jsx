// import { useState, useEffect } from "react";
// import axios from 'axios';
import './product-card.scss'
import data from '../../assets/data-mock/products.json'

function ProductCard() {

    console.log(data);
    const products = data.products;
    const productCard = products.map((product, index) => (
        <div className="product-card">
            <img className="product-card__img" src={product.image} key={index} alt={product.name}/>
            <div className="product-card__desc" disabled={product.owned}>
                <span class="name">{product.name}</span>
                <div class="info-box">
                    <span class="discount" >-{product.discount}%</span>
                    <button
                    class="button action"
                    //  *ngIf="!product.owned; else owned"
                    //  (click)="addToCart(product)"
                    //  [disabled]="product.inCart"
                    >
                        {product.inCart ? "in cart" : "$" + product.price }
                    </button>
                    {/* <ng-template #owned>
                    <span class="action">owned</span>
                    </ng-template> */}
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