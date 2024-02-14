// import redux from 'redux'
const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleWare = redux.applyMiddleware

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICE_CreamOrdered = 'ICE_CreamOrdered'
const ICE_CreamRestocked = 'ICE_CreamRestocked'

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

function orderIcecream (qty = 1){
    return{
        type: ICE_CreamOrdered,
        payload: qty
    }
}

function restockIcecream (qty = 1){
    return {
        type: ICE_CreamRestocked,
        payload: qty
    }
}
// Reducers - specify how app's state changes in response to actions sent.
// it is a function that accepts state and actio as aurguments and returns a new state

//? (prevState, action)=> newState

//? store of application where all states are stored;
// const initialState = {
//     numOfCakes : 10,
//     numOfIcecreams :20
// }

const initialCakeState = {
    numOfCakes : 10,
}
const initialIceCreamState = {
    numOfIcecreams :20
}

const cakeReducer = (state = initialCakeState, action)=>{
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
const iceCreamReducer = (state = initialIceCreamState, action)=>{
    switch(action.type){
        case ICE_CreamOrdered:
            return{
                ...state,
                numOfIcecreams : state.numOfIcecreams - 1
            }
        case ICE_CreamRestocked:
            return{
                ...state,
                numOfIcecreams : state.numOfIcecreams + action.payload
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

const rootReducers = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

// reducer func has the initial state of the application.
// create store accepts an aurgument which is reducer function which has initialState off appl'n
// it is required to make state transitiopns based on action recieved
// createStore method accepts only one reducer[go for combine reducer and then go for createReducer]
const store = createStore(rootReducers, applyMiddleWare(logger))
console.log('initialState', store.getState())

// to check updated state value
const unsubscribe = store.subscribe(()=>{
    
})

//? dispatch actions to update the store
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const actions = bindActionCreators(
    {orderCake, restockCake, orderIcecream, restockIcecream},
    store.dispatch
)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIcecream()
actions.orderIcecream()
actions.restockIcecream(2)

unsubscribe();