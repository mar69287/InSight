const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', ensureLoggedIn, eventsCtrl.create);
router.get('/', ensureLoggedIn, eventsCtrl.index);
router.delete('/:id', ensureLoggedIn, eventsCtrl.deleteEvent)

module.exports = router;