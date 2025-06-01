import { Router, RouterProvider } from "react-router-dom"
import router from "./router"
import Navbar from "./components/Navbar"

interface IProps {

}

const App = ({}: IProps) => {
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}

export default App