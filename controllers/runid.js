const handleGetrun = (req,res,db) => {
    const {job_order_id} = req.body

    db.select('*').from('runs').where({job_order_id: job_order_id}).then(items => {
        res.json(items)
    })
}

module.exports = {
    handleGetrun: handleGetrun
}