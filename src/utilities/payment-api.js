import sendRequest from './send-request'
const BASE_URL = '/api/payment'

export async function createPayment(data) {
    // console.log('in the payment controller')
    console.log(data)
    return sendRequest(`${BASE_URL}/`, 'POST', data)

}


