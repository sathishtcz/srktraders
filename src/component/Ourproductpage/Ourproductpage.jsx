import React, { useState } from 'react';
import OurProduct from '../../shared/component/OurProduct/OurProduct';

export default function Ourproductpage() {

    const [products, setProducts] = useState([]);

    return (
        <div>
            <OurProduct products={products} setProducts={setProducts} />
        </div>
    );
}
