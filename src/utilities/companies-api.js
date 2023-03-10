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
    console.log(updatedData)
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', updatedData)
}

export async function deleteCompany(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export async function createEmployee(companyId, employeeData) {
    return sendRequest(`${BASE_URL}/${companyId}/employee`, 'POST', employeeData)
    // console.log('create employee api')
    // console.log(companyId)
    // console.log(employeeData)
}

export async function getEmployee(companyId, employeeId) {
    // console.log(`company: ${companyId}`)
    // console.log(`employee: ${employeeId}`)
    return sendRequest(`${BASE_URL}/${companyId}/employees/${employeeId}`)
    // console.log("get employee api")
}

export async function deleteEmployee(companyId, employeeId) {
    return sendRequest(`${BASE_URL}/${companyId}/employees/${employeeId}`, 'DELETE')
    // console.log('delete api employee')
    // console.log(companyId)
    // console.log(employeeId)
}

export async function updateEmployee(companyId, employeeId, updatedData) {
    return sendRequest(`${BASE_URL}/${companyId}/employees/${employeeId}`, 'PUT', updatedData)
}