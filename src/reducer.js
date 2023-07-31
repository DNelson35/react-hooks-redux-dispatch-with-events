// add code snippets from README
let state;
const container = document.getElementById('container')


function reducer(state = { count: 0 }, action){
    switch(action.type){
        case 'counter/increment':
            return { count: state.count + 1}
        case 'counter/decrement':
            return { count: state.count - 1}
        default:
            return state
    }
}

function dispatch(action){
    state = reducer(state, action)
    render()
}


function render(){
    container.textContent = state.count
}

dispatch({  type: '@@INIT'})

const addButton = document.getElementById('button')

const decrementButton = document.getElementById('new_button')


addButton.addEventListener('click', () => {
    dispatch({ type: 'counter/increment' })
})

decrementButton.addEventListener('click', () => {
    dispatch({ type: 'counter/decrement' })
})

