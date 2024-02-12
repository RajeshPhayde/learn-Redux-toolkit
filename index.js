// import redux from 'redux'
const redux = require('redux');
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake(){ // action_creater
    return {
        type : CAKE_ORDERED,    // action , an object with a type property
        payload : 1
    }
    
}

function restockCake (qty){
    return {
        type: CAKE_RESTOCKED,
        payload : qty
    }
}

// Reducers - specify how app's state changes in response to actions sent.
// it is a function that accepts state and actio as aurguments and returns a new state

//? (prevState, action)=> newState

// store of application where all states are stored;
const initialState = {
    numOfCakes : 10,
    // anotherProp : 0,
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,        //1st copy the state of the object and than change the property you need.(in case of object having more than 1 property)
                numOfCakes : state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

//Redux store - one store for entire app
// holds app's state
//? allows states via getState()
//? allow state to update via dispatch(action)
//? register listners via subscribe(listner)
//? handles unregistring of listners via the function returned by subscribe(listner)

// reducer func has the initial state of the application.
// create store accepts an aurgument which is reducer function which has initialState off appl'n
// it is required to make state transitiopns based on action recieved
const store = createStore(reducer)
console.log('initialState', store.getState())

// to check updated state value
const unsubscribe = store.subscribe(()=>{
    console.log('updated state', store.getState())
})

// dispatch actions to update the store
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))


unsubscribe();