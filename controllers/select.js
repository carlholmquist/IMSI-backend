const handleProductsreq = (req,res,db) => {
    console.log('Test Select')
    db.select('*').from('products').then(products => {
        console.log(products.slice(0,2));
        res.json(products);
    })
}

module.exports = {
    handleProductsreq: handleProductsreq
};