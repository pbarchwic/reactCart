// import { useState, useEffect } from "react";
// import axios from 'axios';
import data from '../../assets/data-mock/products.json'

function ProductCard() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('/src/assets/data-mock/products.json');
    //       setData(response.data);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error('Błąd podczas pobierania danych:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);

    console.log(data)

    return (
        <div class="products">
            {/* <div class="product-card" *ngFor="let product of products">
                <img class="product-card__img" [src]="product.image" />
                <div class="product-card__desc" [class.disabled]="product.owned">
                <span class="name">{{ product.name }}</span>
                <div class="info-box">
                    <span class="discount" *ngIf="product.discount"
                    >-{{ product.discount }}%</span
                    >
                    <button
                    class="button action"
                    *ngIf="!product.owned; else owned"
                    (click)="addToCart(product)"
                    [disabled]="product.inCart"
                    >
                    {{ product.inCart ? "in cart" : "$" + product.price }}
                    </button>
                    <ng-template #owned>
                    <span class="action">owned</span>
                    </ng-template>
                </div>
                </div>
            </div> */}

            produkty
        </div>

    )
}

export default ProductCard