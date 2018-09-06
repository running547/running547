// import { createStore } from 'redux'
var { createStore } = require('redux')

/**
 * 创建store
 * 通过reducer建立
 */

function counter(state = 0, action) {
    switch (action.type) {
        case '加一':
            return state + 1
        case '减一':
            return state - 1
        default:
            return 10
    }
}

const store = createStore(counter)

function listener(){
    /**
     * 获取state 
     */
    const current = store.getState()
    console.log(current);
    
}

/**
 * 派发事件
 */
store.dispatch({ type: '加一' })

/**
 * 监听state
 */
store.subscribe(listener)


