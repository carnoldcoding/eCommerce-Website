import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products = [
    {id: 1, name: "Shoes", description: "Running Shoes", price: '$5', image: 'https://res.cloudinary.com/atoms-shoes/image/upload/c_scale,w_1400,q_auto,f_auto/v1622733115/products/shoes/model000/black-white_profile'},
    {id: 2, name: "Macbook", description: "Apple Macbook", price: '$10', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000'},
];

const Products = () => {
    return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;