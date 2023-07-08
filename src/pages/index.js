import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import SidebarLeft from '@/components/sidebarLeft';
import Feed from '@/components/feed';
import SidebarRight from '@/components/sidebarRight';

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
			<div className="font-inter flex min-h-screen w-full max-w-7xl flex-row text-white">
				<SidebarLeft />
				<main className="flex flex-1 flex-grow ml-[68px] xs:ml-[88px] xl:ml-[275px]">
					<Feed />
					<SidebarRight />
				</main>
			</div>
		</div>
	);
}
