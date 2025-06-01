import { useLocation } from "react-router-dom"

const LoginPage = () => {
    const location = useLocation();
    console.log(location);
    return(
        <div>
            <h2 className="text-center mb-3">Login to Contribute</h2>
            <form className="space-y-3 max-w-sm mx-auto">
                <div className=" flex flex-col">
                    <input placeholder="Email address" className="my-1 rounded-lg text-gray-500 border-2 border-gray-500 p-1 duration-200 font-medium"/>
                    <input placeholder="Password" className="my-1 rounded-lg text-gray-500 border-2 border-gray-500 p-1 duration-200 font-medium"/>
                                    <button className="rounded-lg text-white p-1 px-5 duration-200 font-medium bg-[#149eca] cursor-pointer">Login</button>
                </div>

            </form>
        </div>
    )
}

export default LoginPage