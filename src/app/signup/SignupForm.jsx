"use client";

import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
    } = useForm();

    const { createUser, profileUpdate, googleLogin } = useAuth();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter();

    const uploadImage = async (event) => {
        const formData = new FormData();
        if (!event.target.files[0]) return;
        formData.append("image", event.target.files[0]);
        const toastId = toast.loading("Image uploading...");
        try {
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!res.ok) throw new Error("Failed to upload image");

            const data = await res.json();
            toast.dismiss(toastId);
            toast.success("Image uploaded successfully!");
            setValue("photo", data.data.url);
        } catch (error) {
            toast.error("Image not uploaded!");
            toast.dismiss(toastId);
        }
    };

    const onSubmit = async (data, event) => {
        const { name, email, password, photo } = data;
        const toastId = toast.loading("Loading...");
        try {
            const user = await createUser(email, password);
            await createJWT({ email });
            await profileUpdate({
                displayName: name,
                photoURL: photo,
            });
            toast.dismiss(toastId);
            toast.success("User signed in successfully");
            replace(from);
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");
        }
    };

    const handleGoogleLogin = async () => {
        const toastId = toast.loading("Loading...");
        try {
            const { user } = await googleLogin();
            await createJWT({ email: user.email });
            toast.dismiss(toastId);
            toast.success("User signed in successfully");
            replace(from);
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");
        }
    };

    return (
        <div className="w-1/3 mx-auto pt-20 p-8 ">
            <h2 className="text-4xl text-center font-bold mb-4 text-white">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='font-secondary space-y-7'>
                <div className="p-8 border">
                    <div className='form-control'>
                        <label className='font-bold text-white' htmlFor="name">Name:</label>
                        <input type="name" {...register("name", { required: true })} placeholder="Enter your Name*" className="mb-3 input input-bordered w-full max-w-md" required />
                    </div>
                    {errors.name && <span className="text-red-600">Name field is required</span>}

                    <div className='form-control'>
                        <label className='font-bold text-white' htmlFor="email">Email:</label>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter your Email*" className="mb-3 input input-bordered w-full max-w-md" required />
                    </div>
                    {errors.email && <span className="text-red-600">Email field is required</span>}

                    <div className='form-control'>
                        <label className='font-bold text-white' htmlFor="password">Password:</label>
                        <input type="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/ })} placeholder="Enter your Password*" className="mb-3 input input-bordered w-full max-w-md" required />
                    </div>
                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be atleast 6 characters or more</span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one Uppercase and one special character.</span>}


                    <div className="form-control mb-6">
                        <label className='font-bold text-white' htmlFor="photo">Photo:</label>
                        <input
                            type="file"
                            id="photo"
                            onChange={uploadImage}
                            className="file-input file-input-bordered file-input-primary w-full"
                        />
                    </div>



                    <div className='form-control'>
                        <input value={"Sign Up"} className="btn btn-success btn-block" type="submit" />
                    </div>
                </div>


            </form>
            <div className='text-center mt-3'>
                <p className="text-white">Already have an account?
                    <Link href={'/login'} className="ml-2 font-semibold text-blue-800">SignIn Here</Link>
                </p>
            </div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleLogin} className="btn btn-outline bg-[#D27D2D] text-white"><FaGoogle></FaGoogle>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignupForm;