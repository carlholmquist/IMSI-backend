const handleJobordersreq = (req,res,db) => {
    db.select('*').from('job_orders')
    .then(job_orders => res.json(job_orders))
}

module.exports = {
    handleJobordersreq: handleJobordersreq
}