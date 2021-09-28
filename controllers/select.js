const handleProductsreq = (req,res,db) => {
    console.log('Test Select')
    db.select('*').from('products').then(products => {
        res.json(products);
    })
}

module.exports = {
    handleProductsreq: handleProductsreq
};