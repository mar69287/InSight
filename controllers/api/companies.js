const Company = require('../../models/company')

module.exports = {
    create,
    index,
    show,
    edit,
    deleteCompany,
    createEmployee,
    getEmployee,
    editEmployee
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

async function show(req, res) {
    // console.log(req.params.id)
    const company = await Company.findById(req.params.id);
    res.json(company);
}

async function edit(req, res) {
    try {
        const id = req.params.id;
        const update = {
            name: req.body.name,
            revenue: req.body.revenue,
            active: req.body.active,
        };

        const updatedCompany = await Company.findByIdAndUpdate(
            id,
            update,
            { new: true }
        );

        res.json(updatedCompany);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteCompany(req, res) {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ error: "Company not found" });
        }
        res.json({ message: "Company deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

async function createEmployee(req, res) {
    try {
        const id = req.params.id;
        const update = {
            employees: {
                name: req.body.name,
                email: req.body.email,
                position: req.body.position,
            }
        };

        const updatedCompany = await Company.findByIdAndUpdate(
            id,
            { $push: update },
            { new: true }
        );

        res.json(updatedCompany);
    } catch (err) {
        res.status(400).json(err);
    }
    // console.log(req.body)
}

async function getEmployee(req, res) {
    try {
        const companyId = req.params.id;
        const employeeId = req.params.eId;

        const company = await Company.findById(companyId);
        const employee = company.employees.id(employeeId);

        res.json(employee);
    } catch (err) {
        res.status(400).json(err);
    }
}


async function editEmployee(req, res) {
    try {
        const companyId = req.params.id;
        const employeeId = req.params.eId;


        const update = {
            name: req.body.name,
            email: req.body.email,
            position: req.body.position,
        };

        const company = await Company.findById(companyId);
        const employee = company.employees.id(employeeId);

        employee.set(update);

        await company.save();

        res.json(employee);
    } catch (err) {
        res.status(400).json(err);
    }
}