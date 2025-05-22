import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignIn = () => {

    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm()
    
        const onSubmit = (data) => console.log(data)
    return (
        <div className="flex flex-col lg:flex-row justify-between">
                    <div className="bg-blue-300 lg:w-[50%] h-[180px] lg:h-screen flex flex-col  items-center">
                        <img className="lg:h-[450px] h-[200px]" src="/assets/NeoTranslatorLogo.webp" alt="" />
                        <div className="text-center md:px-12 hidden lg:block">
                            <h3 className="text-2xl font-bold">Instant Translation, Anywhere.</h3>
                            <p>
                                NeoTranslator lets you type in one language and instantly see it in another — fast, simple, and reliable.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[50%] md:px-20 px-5">
                        <div className="text-center pb-3">  
                            <h1 className="font-bold text-3xl lg:py-7 py-2">𝓝𝓮𝓸𝓣𝓻𝓪𝓷𝓼𝓵𝓪𝓽𝓸𝓻</h1>
        
                            <h3 className="text-xl md:text-2xl my-4">SignIn now to start translating with <span className="underline">NewTranslator</span></h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-black" >
                            <div className="">
                                <label>User Full Name</label>
                                <input className="w-full text-gray-800 outline-none border-b border-gray-400" placeholder="Full Name" {...register("name")} />
                            </div>
                            <div>
                                <label>User Email or Password</label>
                                <input className="w-full outline-none border-b border-gray-400" placeholder="Email or Number" {...register("email", { required: true })} type="text" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input className="w-full outline-none border-b border-gray-400" placeholder="Password"  {...register("password", { required: true })} type="password" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <input type="submit" className="w-full font-bold bg-blue-500 hover:bg-blue-900 transition duration-300 text-white p-3 mt-3 rounded-4xl" />
                        </form>
        
                        <div className="flex flex-col items-center justify-center">
                            <div className="divider">OR</div>
                            <button className="btn border-none flex items-center text-2xl"><FcGoogle /> Sign in with Google</button>
        
                            <p className="text-center my-6">You have an account? Please <Link to='/signUp' className="underline text-blue-500">SignUp</Link> </p>
                        </div>
                    </div>
                </div>
    );
};

export default SignIn;