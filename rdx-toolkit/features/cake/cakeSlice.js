const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numsOfCakes : 10,
}

/*create slice uses immer library,
 and create action creators with the same name as the reducer functions we have written
 redux-toolkit handles state updates */

const cakeSlice = createSlice({
    name: 'cake', //name for the slice
    initialState,
    reducers : {  //handles individual state transition
        ordered: (state)=>{
            state.numsOfCakes--
        },
        restocked : (state, action)=>{
            state.numsOfCakes += action.payload
        },
    },
})

module.exports = cakeSlice.reducer

module.exports.cakeActions = cakeSlice.actions
/* this takes care of defining actionType, actionObject, actionCreator,
 switch statements in reducers and handling immutable updates in the reducer */

