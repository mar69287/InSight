import sendRequest from './send-request'
const BASE_URL = '/api/companies'

export async function createCompany(companyData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', companyData)
}

export async function getCompanies() {
    return sendRequest(BASE_URL)
}

export async function getCompany(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export async function updateCompany(id, updatedData) {
    // console.log('editingggg')
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', updatedData)
}

export async function deleteCompany(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}