


var initState = {
    isAuth: false
}
const LOGIN = '登录'
const LOGOUT = '登出'

export function loginFn(state = {isAuth:'false'} ,action) {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: 'true' }
        case LOGOUT:
            return {...state, isAuth: 'false' }
        default:
            return state

    }
}


export function logIn() {
    return { type: LOGIN }
}
export function logOut() {
    return { type: LOGOUT }
}