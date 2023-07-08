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
		<div className="flex w-full justify-center bg-black">
			<div className="font-inter flex min-h-screen w-full max-w-7xl flex-row font-medium text-white">
				<SidebarLeft />
				<main className="xs:ml-[88px] ml-[68px] flex-1 flex-grow xl:ml-[275px]">
					<button onClick={() => signOut()}>Sign out</button>
				</main>
			</div>
		</div>
	);
}
