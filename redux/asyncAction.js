const fetchUser = ()=>{
    return function(dispatch){
        dispatch(fetchUserRequest)
        axios.get("// https://jsonplaceholder.typicode.com/users").then(res =>{
            const users = res.data.map((user)=>user.id)
        }).catch((err)=>console.log(err.message))
    }
}


const store = createStore(rootReducers, applyMiddleWare(thunkMiddleWare))