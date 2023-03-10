const Event = require('../../models/event')

module.exports = {
    create,
    index,
    deleteEvent,
}

async function create(req, res) {
    // console.log('event create controller')
    console.log(req.body)
    const event = new Event({
        title: req.body.title,
        user: req.body.user,
        start: req.body.start,
        end: req.body.end,
    });
    try {
        console.log(event)
        const savedEvent = await event.save();
        res.json(savedEvent);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    const userId = req.user._id;
    const events = await Event.find({ user: userId });
    // console.log(events)

    res.json(events);
}


async function deleteEvent(req, res) {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        res.json({ message: "Event deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}