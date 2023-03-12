import sendRequest from './send-request'
const BASE_URL = '/api/payment'

export async function createPayment(data) {
    return sendRequest(`${BASE_URL}/`, 'POST', data)
}

export async function getPayments() {
    return sendRequest(BASE_URL)
}
