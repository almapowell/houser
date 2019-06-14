module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db')

        db.get_all_houses().then(res => {
            res.status(200).send(res)
        })
    },

    createHouse: (req, res) => {
        const db = req.app.get('db')
        const { name, address, city, state, zipcode } = req.body

        db.create_house().then(res => {
            res.status(200).send(res)
        })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.delete_house([id]).then(res => {
            res.status(200).send(res)
        })
    }
}