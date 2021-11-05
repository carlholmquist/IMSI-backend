const handleItemreq = (req,res,db) => {
    console.log('Item request', req.body);

    const product_item_barcode = req.body.search;
    const product_id = 350;
    db.select('product_items.product_item_barcode','product_items.product_item_quantity','product_locations.location_id','products.product_name')
    .from('product_items')
    .join('product_locations','product_items.product_item_barcode','=','product_locations.product_item_barcode')
    .join('products','product_items.product_id','=','products.product_id')
    .where({'product_items.product_item_barcode': product_item_barcode})
    // .where({'product_items.product_id': product_id})
    .then(items => {
        console.log(items)
        res.json(items)
    })

}
module.exports = {
    handleItemreq: handleItemreq
};