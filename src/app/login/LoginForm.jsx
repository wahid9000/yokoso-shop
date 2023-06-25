"use client";

import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { loginUser, googleLogin } = useAuth();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || '/';
    const {replace} = useRouter();



    const onSubmit = async (data) => {
        const { email, password } = data;
        const toastId = toast.loading("Loading...");
        try {
            const user = await loginUser(email, password);
            await createJWT({ email });
            toast.dismiss(toastId)
            toast.success('User SignedIn Successfully')
            replace(from)
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "Invalid Email or Password")
        }
    };

    const handleGoogleLogin = async () => {
        const toastId = toast.loading("Loading...");
        try {
            const user = await googleLogin();
            await createJWT({ email: user.email });
            toast.dismiss(toastId)
            toast.success('User SignedIn Successfully')
            replace(from)
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "Invalid Email or Password")
        }
    }


    return (
        <div>
            <div className="w-1/3 mx-auto pt-24 p-8">
                <h2 className="text-4xl text-center font-bold mb-4 text-white">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-7 font-secondary'>

                    <div className="border p-8">
                        <div className='form-control'>
                            <label className='text-white font-bold mb-3' htmlFor="email">Email:</label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter your Email*" className="input input-bordered w-full max-w-md" required />
                        </div>
                        {errors.email && <span>This field is required</span>}

                        <div className='form-control relative mt-4'>
                            <label className='text-white font-bold mb-3' htmlFor="password">Password:</label>
                            <input type="password"  {...register("password", { required: true })} placeholder="Enter your Password*" className="text-black input input-bordered w-full max-w-md" required />

                        </div>
                        {errors.password && <span className="text-yellow-300">This field is required</span>}

                        <div className='form-control mt-8'>
                            <input className="btn btn-block btn-success" type="submit" value={"Login"} />
                        </div>
                    </div>
                </form>
                <div className='text-center mt-3'>
                    <p>New To Yokoso?
                        <Link href={'/signup'} className="ml-2 font-semibold text-blue-800">SignUp Here</Link>
                    </p>
                </div>
                <div className="divider">OR</div>
                <div className="text-center">
                    <button onClick={handleGoogleLogin} className="btn btn-outline bg-[#D27D2D] text-white"><FaGoogle></FaGoogle>Continue With Google</button>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;