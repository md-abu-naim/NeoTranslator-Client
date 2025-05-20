import { useForm } from "react-hook-form"

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className="flex justify-between items-center">
            <div className="bg-blue-300">
                <img   src="/src/assets/birdLogo.webp" alt="" />
                <div>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id in ratione maiores est hic facere autem soluta inventore atque quibusdam veniam voluptatem, quas amet rerum!
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h1>𝓝𝓮𝔀𝓣𝓻𝓪𝓷𝓼𝓵𝓪𝓽𝓸𝓻</h1>

                    <h3>Welcome to NewTranslator</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="border" >
                    <input placeholder="Full Name" {...register("name")} />

                    <input placeholder="Email or Number" {...register("email", { required: true })} type="text" />
                    <input placeholder="Password"  {...register("password", { required: true })} type="password" />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;