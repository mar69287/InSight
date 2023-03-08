const Company = require('../../models/company')

module.exports = {
    create,
    index
}

async function create(req, res) {
    const company = new Company({
        name: req.body.name,
        user: req.body.user,
        revenue: req.body.revenue,
        active: req.body.active,
    });
    try {
        console.log(company)
        const savedCompany = await company.save();
        res.json(savedCompany);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    const userId = req.user._id;
    const companies = await Company.find({ user: userId });
    // console.log(companies)

    res.json(companies);
}