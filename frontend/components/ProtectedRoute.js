import { isLoggedIn } from '../utils/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    useEffect(() => {
        if (!isLoggedIn()) router.push('/login');
    }, []);
    return isLoggedIn() ? children : null;
}
