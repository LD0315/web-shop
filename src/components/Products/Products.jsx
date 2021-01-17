import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://osteopathicworks.com.au/wp-content/uploads/2017/07/running.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://images.idgesg.net/images/article/2020/05/13-inch-macbook-pro-colors-100840647-large.jpg'},
];

const Products = () => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid> 
            ))}
        </Grid>
    </main>
    );
}

export default Products;
