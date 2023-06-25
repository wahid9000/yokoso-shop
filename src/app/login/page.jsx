import '@/app/(home)/Banner.css'
import LoginForm from "./LoginForm";

export const metadata = {
    title: "Login | Yokoso Shop"
}


const LoginPage = () => {
    return (
        <div className='banner-bg h-[1000px]'>
            <LoginForm></LoginForm>
        </div>
    );
};

export default LoginPage;