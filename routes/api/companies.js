const express = require('express');
const router = express.Router();
const companiesCtrl = require('../../controllers/api/companies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', ensureLoggedIn, companiesCtrl.create);
router.get('/', ensureLoggedIn, companiesCtrl.index);
router.get('/:id', ensureLoggedIn, companiesCtrl.show);
router.put('/:id', ensureLoggedIn, companiesCtrl.edit);
router.delete('/:id', ensureLoggedIn, companiesCtrl.deleteCompany)
router.post('/:id/employee', ensureLoggedIn, companiesCtrl.createEmployee)
router.get('/:id/employees/:eId', ensureLoggedIn, companiesCtrl.getEmployee);

module.exports = router;