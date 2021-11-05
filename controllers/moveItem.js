const handleMoveItem = (req,res,db) => {
    console.log('Item request', req.body);
    const location_id = req.body.location_id;
    const product_item_barcode = req.body.product_item_barcode;

    console.log('Location Id: ', location_id);
    console.log('Barcode :', product_item_barcode);

    db('product_locations')
    .where({product_item_barcode: product_item_barcode})
    .update({location_id: location_id})
    .then(items => {
        console.log('Db response: ', items)
        
        res.json(items)
    })

}
module.exports = {
    handleMoveItem: handleMoveItem
};