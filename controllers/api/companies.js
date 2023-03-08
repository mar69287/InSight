const Company = require('../../models/company')

module.exports = {
    create
    // index
}

async function create(req, res) {
    const company = new Company({
        name: req.body.name,
        user: req.body.user,
        revenue: req.body.revenue,
        active: req.body.active,
    });
    try {
        const savedCompany = await company.save();
        res.json(savedCompany);
    } catch (err) {
        res.status(400).json(err);
    }
    console.log(req.body)
}

// async function index(req, res) {
//     const userId = req.user._id;
//     const notes = await Note.find({ user: userId });
//     res.json(notes);
// }