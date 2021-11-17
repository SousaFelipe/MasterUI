const TOKEN_KEY = 'LSPK_SSNTKN'


export const isAuthenticated = () => (
    (localStorage.getItem(TOKEN_KEY) !== null)
)


export const getToken = () => (
    localStorage.getItem(TOKEN_KEY)
)


export const storeToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
    return getToken()
}


export const destroyToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}
