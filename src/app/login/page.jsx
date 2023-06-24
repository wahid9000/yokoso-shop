import '@/app/(home)/Banner.css'
import LoginForm from "./LoginForm";

export const metadata = {
    title: "Login | Yokoso Shop"
}


const LoginPage = () => {
    return (
        <div className='banner-bg h-screen'>
            <LoginForm></LoginForm>
        </div>
    );
};

export default LoginPage;