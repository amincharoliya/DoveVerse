import SidebarLeft from '@/components/sidebarLeft';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

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
		<div className="bg-black flex justify-center w-full">
			<div className="w-full flex flex-row font-inter font-medium text-white min-h-screen max-w-7xl">
				<SidebarLeft />
				<main className="flex-1 flex-grow ml-[68px] xs:ml-[88px] xl:ml-[275px]">
					<button onClick={() => signOut()}>Sign out</button>
				</main>
			</div>
		</div>
	);
}
