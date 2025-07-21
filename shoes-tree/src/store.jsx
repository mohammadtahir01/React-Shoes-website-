import {configureStore} from "@reduxjs/toolkit"
import myfile from "./cardSlice"
const Store = configureStore({
    reducer:{
        card:myfile
    }
})
export default Store;