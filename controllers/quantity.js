const handleQuantity = (req,res,db) => {
    console.log(req.body);

    const { product_id } = req.body;

    db.select('product_items.product_item_barcode','product_items.product_item_quantity','product_locations.location_id')
    .from('product_items')
    .join('product_locations','product_items.product_item_barcode','=','product_locations.product_item_barcode')
    .where({'product_items.product_id': product_id})
    .then(items => {
        console.log(items)
        res.json(items)
    })


}

module.exports = {
    handleQuantity: handleQuantity
};