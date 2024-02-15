const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numsOfIceCreams : 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers:{
        ordered: (state, action)=>{
            state.numsOfIceCreams -= action.payload
        },
        restocked:(state, action)=>{
            state.numsOfIceCreams += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions