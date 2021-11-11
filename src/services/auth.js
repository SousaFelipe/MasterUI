export const TOKEN_KEY = 'lspk_sess_token'


export const fakeAuth = (testUser) => {

    testUser = {
        name: 'Felipe Sousa',
        email: 'sousa.felipe@spark.com',
        token: 'FsakslaasdoJlvlksdçskvnjiohvfibfbdcff65wd6f65ew4s1vbsgnb6f1dfvv5'
    }

    return {

        signin: (callback) => {
            return callback(testUser)
        },

        signout: (callback) => {
            return callback()
        }
    }
}


export const isAuthenticated = () => (
    (localStorage.getItem(TOKEN_KEY) !== null)
)


export const getToken = () => (
    localStorage.getItem(TOKEN_KEY)
)


export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
}


export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}
