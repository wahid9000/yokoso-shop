import SignupForm from "./SignupForm";
import '@/app/(home)/Banner.css'

const meatdata = {
    title: "Sign Up | Yokoso"
}

const SignUp = () => {
    return (
        <div className='banner-bg'>
            <SignupForm></SignupForm>
        </div>
    );
};

export default SignUp;