import {configureStore} from "@reduxjs/toolkit"
import myfile from "./cardSlice"
const Store = configureStore({
    reducer:{
       Card:myfile
    }
})
export default Store;