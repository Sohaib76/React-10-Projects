const {createStore} = Redux;

const initState = {
    todos: [],
    posts : []
}
function myreducer(state = initState, action){
    if(action.type == "ADD_TODO"){
        return {
            ...state,
            todos: [
                ...state.todos, action.todos
            ]
        }
    }
}

const store = createStore(myreducer);

store.subscribe(()=>{
    console.log("State Update")
    console.log(state.getState())
})

const todoAction = {type : 'ADD_TODO', todo: 'buy t'}

store.dispatch({type : 'ADD_TODO', todo: 'buy t'})

store.dispatch({type : 'ADD_TODO', todo: 'buy t'})