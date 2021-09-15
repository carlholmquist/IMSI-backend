const handleCategorysreq = (req,res,db) => {
    console.log('Test Select')
    db.select('*').from('categorys').then(categorys => {
        console.log(categorys);
        res.json(categorys);
    })
}

module.exports = {
    handleCategorysreq: handleCategorysreq
};