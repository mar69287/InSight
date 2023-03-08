import sendRequest from './send-request'
const BASE_URL = '/api/companies'

export async function createCompany(companyData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', companyData)
}

// export async function getNotes() {
//     return sendRequest(BASE_URL)
// }