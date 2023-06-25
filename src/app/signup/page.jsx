import SignupForm from "./SignupForm";
import '@/app/(home)/Banner.css'

export const metadata = {
    title: "Sign Up | Yokoso"
}

const SignUp = () => {
    return (
        <div className='banner-bg h-[1000px]'>
            <SignupForm></SignupForm>
        </div>
    );
};

export default SignUp;

