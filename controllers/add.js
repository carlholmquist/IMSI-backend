
const handleProductadd = (req,res,db,bcrypt)=>{
    console.log(req.body);
    res.json(req.body.product_id);


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