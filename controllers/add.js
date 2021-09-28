
const handleProductadd = (req,res,db)=>{
    // res.json('Cool it works');
    const {barcode, quantity_received, inventory_location, product_id} = req.body
    console.log('Testing destruc: ',req.body)

    db.transaction(trx => {
        trx.insert({
            product_item_barcode: barcode,
            product_item_quantity: quantity_received,
            product_id: product_id,
        })
        .into('product_items')
        .returning('product_item_barcode')
        .then(lol=> {
            return trx('product_locations')
            .insert({
                product_item_barcode: barcode,
                location_id: inventory_location
            })
            .then(item => {
                res.json(item);
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })

        // db.transaction(trx => {
        //     trx.insert({
        //         hash: hash,
        //         email: email
        //     })
        //     .into('login')
        //     .returning('email')
        //     .then(loginemail => {
        //         return trx('users')
        //             .returning('*')
        //             .insert({
        //                 email: loginemail[0],
        //                 name: name,
        //                 joined: new Date()
        //             })
        //             .then(user => {
        //                 res.json(user[0]);
        //             })
        //     })
        //     .then(trx.commit)
        //     .catch(trx.rollback)
        // })
        // .catch(err => res.status(400).json(err))
}

module.exports = {
    handleProductadd: handleProductadd
};