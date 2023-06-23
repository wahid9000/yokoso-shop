const navData = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/products',
        title: 'Products'

    }
];

export const afterLoginNavData = [
    ...navData,
    {
        path: '/dashboard',
        title: 'Dashboard'
    }
];

export const beforeLoginNavData = [
    ...navData,
    {
        path: '/signup',
        title: 'Sign Up',
    },
    {
        path: '/login',
        path: 'Login'
    }
];