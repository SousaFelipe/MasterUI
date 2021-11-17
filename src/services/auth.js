const TOKEN_KEY = 'LSPK_SSNTKN'



export const getToken = () => (
    localStorage.getItem(TOKEN_KEY)
)


export const storeToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
    return getToken()
}


export const destroyToken = () => {
    localStorage.removeItem(TOKEN_KEY)
    return ( ! getToken())
}


export const validateAuthorization = (authorization) => {

    if (authorization) {

        let remoteToken = authorization.split(' ')[1]
        let localToken = getToken()

        return (localToken === remoteToken)
    }

    return false
}
