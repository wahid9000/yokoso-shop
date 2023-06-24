"use client";

import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {

    const { loginUser, googleLogin } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const toastId = toast.loading("Loading...");
        try {
            const user = await loginUser(email, password);
            toast.dismiss(toastId)
            toast.success('User SignedIn Successfully')
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "Invalid Email or Password")
        }
    };

    const handleGoogleLogin = async () => {
        const toastId = toast.loading("Loading...");
        try {
            const user = await googleLogin();
            toast.dismiss(toastId)
            toast.success('User SignedIn Successfully')
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "Invalid Email or Password")
        }
    }


    return (
        <div>
            <div className="w-1/3 mx-auto pt-24 p-8 text-white">
                <h2 className="text-4xl text-center font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-7 font-secondary'>

                    <div className="border p-8">
                        <div className='form-control'>
                            <label className='font-bold mb-3' htmlFor="email">Email:</label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter your Email*" className="input input-bordered w-full max-w-md" required />
                        </div>
                        {errors.email && <span>This field is required</span>}

                        <div className='form-control relative mt-4'>
                            <label className='font-bold mb-3' htmlFor="password">Password:</label>
                            <input type="password"  {...register("password", { required: true })} placeholder="Enter your Password*" className="input input-bordered w-full max-w-md" required />

                        </div>
                        {errors.password && <span>This field is required</span>}

                        <div className='form-control mt-8'>
                            <input className="btn btn-block btn-success" type="submit" value={"Login"} />
                        </div>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="text-center">
                    <button onClick={handleGoogleLogin} className="btn btn-outline bg-[#D27D2D] text-white"><FaGoogle></FaGoogle>Continue With Google</button>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;