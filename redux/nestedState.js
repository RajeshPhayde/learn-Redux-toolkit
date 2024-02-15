const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Rajesh",
  address: {
    street: "111 Main road",
    city: "Bengaluru",
    state: "Karnataka",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const CITY_UPDATED = 'CITY_UPDATED';

const updatedStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const updatedCity = (city)=>{
  return {
    type : CITY_UPDATED,
    payload : city,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return{
      //     ...state,
      //     address:{
      //         ...state.address,
      //         street: action.payload
      //     }
      // }

      //? This helps in handling nested data
      return produce(state, (draft) => {
        //? 1st aurg-> initial state
        //? 2ns aurg-> function which receives draft copy of state
        draft.address.street = action.payload;
      });
    case CITY_UPDATED : 
      return produce(state, (draft)=>{
        draft.address.city = action.payload
      })
    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);
console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state ", store.getState());
});
store.dispatch(updatedStreet("777 main road"));
store.dispatch(updatedCity("Udupi"));
unsubscribe();



//! MIDDLEWARE
// redux with custom functionality
// for logging, error reporting
/*
  reduxLogger
*/