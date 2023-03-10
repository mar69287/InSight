import sendRequest from './send-request'
const BASE_URL = '/api/events'

export async function createEvent(eventData) {
    // console.log(eventData)
    return sendRequest(`${BASE_URL}/create`, 'POST', eventData)
}

export async function getEvents() {
    return sendRequest(BASE_URL)
}


export async function deleteEvent(id) {
    // console.log(id)
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

