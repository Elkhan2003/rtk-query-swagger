import { createBrowserRouter } from 'react-router-dom';
import LayoutSide from '@/src/pagesSide/components/layout/LayoutSide';
import HomePage from '@/src/pagesSide/components/pages/HomePage';
import AboutPage from '@/src/pagesSide/components/pages/AboutPage';
import LayoutAuth from '@/src/pagesAuth/components/layout/LayoutAuth.tsx';
import LoginPage from '@/src/pagesAuth/components/pages/LoginPage';
import RegistrationPage from '@/src/pagesAuth/components/pages/RegistrationPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutSide />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/about',
				element: <AboutPage />
			}
		]
	},
	{
		path: '/auth',
		element: <LayoutAuth />,
		children: [
			{
				path: '/auth/login',
				element: <LoginPage />
			},
			{
				path: '/auth/registration',
				element: <RegistrationPage />
			}
		]
	}
]);
