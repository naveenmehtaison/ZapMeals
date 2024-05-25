import DataContext from "./auth-context"
const StoreContext=(props)=>{
    const store={
        name:'naveen'
    }
    return(
        <DataContext.Provider value={store}>
            {props.children}

        </DataContext.Provider>
    )

}
export default StoreContext