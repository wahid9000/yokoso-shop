"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const SignupForm = () => {

    const { createUser, googleLogin, profileUpdate } = useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password, name, photoURL } = data;
        const toastId = toast.loading("Loading...");
        try {
            const user = await createUser(email, password);
            await profileUpdate({
                displayName: name,
                photoURL: photoURL
            });
            toast.dismiss(toastId)
            toast.success('User Registered Successfully')
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
        <div className="w-1/3 mx-auto pt-24 p-8 ">
            <h2 className="text-4xl text-center font-bold mb-4 text-white">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='font-secondary space-y-7'>
                <div>
                    <div className='form-control'>
                        <label className='font-bold text-white' htmlFor="name">Name:</label>
                        <input type="name" {...register("name", { required: true })} placeholder="Enter your Name*" className="input input-bordered w-full max-w-md" required />
                    </div>
                    {errors.name && <span className="text-red-600">Name field is required</span>}

                    <div className='form-control'>
                        <label className='font-bold text-white' htmlFor="email">Email:</label>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter your Email*" className="input input-bordered w-full max-w-md" required />
                    </div>
                    {errors.email && <span className="text-red-600">Email field is required</span>}

                    <div className='form-control relative'>
                        <label className='font-bold text-white' htmlFor="password">Password:</label>
                        <input type="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/ })} placeholder="Enter your Password*" className="input input-bordered w-full max-w-md" required />

                    </div>
                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be atleast 6 characters or more</span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one Uppercase and one special character.</span>}

                    <div className='form-control'>
                        <label className='font-bold text-white' htmlFor="phone">Phone Number:</label>
                        <input type="phone" {...register("phone", { required: true, pattern: /(\+88)?-?01[3-9]\d{8}/ })} placeholder="Enter your Phone Number*" className="input input-bordered w-full max-w-md" required />
                    </div>
                    {errors.phone && <span className="text-red-600">Phone Number is required</span>}
                    {errors.phone?.type === 'pattern' && <span className="text-red-600">You must provide a valid Bangladeshi phone number</span>}



                    <div className='form-control'>
                        <label className='font-bold text-white' htmlFor="photoURL">PhotoURL:</label>
                        <input type="text" {...register("photoURL", { required: true })} placeholder="Enter PhotoURL*" className="input input-bordered w-full max-w-md" required />
                    </div>
                    {errors.photoURL && <span className="text-red-600">PhotoURL field is required</span>}

                    <div className='form-control'>
                        <input value={"Sign Up"} className="btn btn-success btn-block" type="submit" />
                    </div>
                </div>


            </form>
            <div className='text-center mt-3'>
                <p>Already have an account?
                    <Link href={'/login'} className="font-semibold text-blue-800">SignIn Here</Link>
                </p>
            </div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-outline bg-[#D27D2D] text-white"><FaGoogle></FaGoogle>Continue With Google</button>
        </div>
    );
};

export default SignupForm;