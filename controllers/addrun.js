const handleAddrun = (req,res,db) => {
    const {machine_id, job_order_id, total_run_length, finished_length} = req.body

    db.transaction(trx => {
        trx.insert({
            machine_id: machine_id,
            job_order_id: job_order_id,
            total_run_length: total_run_length,
            finished_length: finished_length
        })
        .into('runs')
        .returning('run_id')
        .then(item => {
            res.json(item)
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
}

module.exports = {
    handleAddrun: handleAddrun
};