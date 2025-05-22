import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className="flex justify-between">
            <div className="bg-blue-300 w-[50%] flex flex-col justify-center items-center">
                <img className="h-[350px]" src="/src/assets/birdLogo.webp" alt="" />
                <div className="text-center px-12 mt-10">
                    <h3 className="text-2xl font-bold">Instant Translation, Anywhere.</h3>
                    <p>
                        NeoTranslator lets you type in one language and instantly see it in another — fast, simple, and reliable.
                    </p>
                </div>
            </div>
            <div className="w-[50%] px-20">
                <div className="text-center pb-3">  
                    <h1 className="font-bold text-3xl py-7">𝓝𝓮𝓸𝓣𝓻𝓪𝓷𝓼𝓵𝓪𝓽𝓸𝓻</h1>

                    <h3 className="text-2xl my-4">Welcome to <span className="underline">NewTranslator</span></h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" >
                    <div className="">
                        <label>User Full Name</label>
                        <input className="w-full outline-none border-b border-gray-400" placeholder="Full Name" {...register("name")} />
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

                    <p className="text-center my-6">You have an account? Please <Link to='/signIn' className="underline text-blue-500">SignIn</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;




// import { useForm } from "react-hook-form";

// const SignUp = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = (data) => console.log(data);

//     return (
//         <div className="flex flex-col md:flex-row min-h-screen">
//             {/* Left Section */}
//             <div className="md:w-1/2 bg-blue-300 flex flex-col justify-center items-center p-8">
//                 <img src="/src/assets/birdLogo.webp" alt="Logo" className="w-32 h-32 object-contain mb-4" />
//                 <div className="text-center">
//                     <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet.</h3>
//                     <p className="text-sm text-gray-700">
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id in ratione maiores est hic facere autem soluta inventore atque quibusdam veniam voluptatem, quas amet rerum!
//                     </p>
//                 </div>
//             </div>

//             {/* Right Section */}
//             <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
//                 <div className="mb-6 text-center">
//                     <h1 className="font-bold text-4xl mb-2">𝓝𝓮𝓸𝓣𝓻𝓪𝓷𝓼𝓵𝓪𝓽𝓸𝓻</h1>
//                     <h3 className="text-xl text-gray-600">Welcome to NewTranslator</h3>
//                 </div>

//                 <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
//                     <div>
//                         <input
//                             placeholder="Full Name"
//                             {...register("name", { required: "Full name is required" })}
//                             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//                     </div>

//                     <div>
//                         <input
//                             placeholder="Email or Number"
//                             {...register("email", { required: "Email or Number is required" })}
//                             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             type="text"
//                         />
//                         {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//                     </div>

//                     <div>
//                         <input
//                             placeholder="Password"
//                             {...register("password", { required: "Password is required" })}
//                             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             type="password"
//                         />
//                         {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
//                     >
//                         Sign Up
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUp;
