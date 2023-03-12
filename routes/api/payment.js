const router = require('express').Router();
const paymentsCtrl = require('../../controllers/api/payments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, paymentsCtrl.create)
router.get('/', ensureLoggedIn, paymentsCtrl.index)

module.exports = router; 