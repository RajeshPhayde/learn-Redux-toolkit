const reduxLogger = require('redux-logger')
const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')

const logger = reduxLogger.createLogger()


//combineReducer function is handled by configureStore
const store = configureStore({
    reducer : {
        cake: cakeReducer,
        iceCream : iceCreamReducer
    },
    //! check once
    middleware: (getDefaultMiddleWare)=> getDefaultMiddleWare().concat(logger),
})



module.exports = store

