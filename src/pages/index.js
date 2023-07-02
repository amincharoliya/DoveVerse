import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import UserState from '../components/UserState';

export default function Home() {
	const { status, data: session } = useSession();
	const router = useRouter();

	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'unauthenticated') {
		router.push('/login');
		return;
	}

	return (
		<main className="flex flex-col font-inter font-medium text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 min-h-screen">
			<UserState />
			{/* <Tweet /> */}
		</main>
	);
}
