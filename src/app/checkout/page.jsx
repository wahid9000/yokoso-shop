import Checkout from "./Checkout";
import '@/app/(home)/Banner.css';

export const metadata = {
  title: "Checkout - Easy Shop",
};

const CheckoutPage = () => {
  return (
    <div className="mt-32 h-screen text-white banner-bg">
      <h1 className="my-5 text-3xl font-bold text-center mb-10">Review Cart Products</h1>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;