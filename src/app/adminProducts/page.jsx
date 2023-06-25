import DashboardLayout from "../dashboard/Dashboard";
import AdminProducts from "./AdminProducts";

const page = () => {
    return (
        <DashboardLayout>
            <AdminProducts></AdminProducts>
        </DashboardLayout>
    );
};

export default page;