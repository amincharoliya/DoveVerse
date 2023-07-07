import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import LoginModal from '@/components/modals/LoginModal';
import Dove from '@/icons/Dove';

export default function LoginScreen() {
	const { status, data: session } = useSession();
	const router = useRouter();

	const [showModal, setShowModal] = useState(false);

	if (status === 'authenticated') {
		router.push('/');
		return;
	}

	return (
		<>
			<div className="flex h-[100vh] flex-col lg:flex-row lg:justify-between">
				<div className="flex h-full w-full items-center justify-center bg-[#15406A] lg:w-[50%] relative ">
					<Image
						src="/images/welcome-bg.jpg"
						fill={true}
						alt="welcome-image"
					/>
					<Dove className="h-full w-[80%] fill-[#1d9bf0] p-2 lg:p-14 relative" />
				</div>
				<div className="flex grow items-center justify-center p-5 lg:pt-5 pt-0 lg:p-1 bg-black text-white">
					<div className="flex w-full items-center justify-start p-12">
						<div className="flex flex-col gap-5">
							<Dove className="w-10 fill-white" />
							<h1 className="mb-12 text-5xl font-extrabold">
								{"See what's happening"}
							</h1>
							<p className="text-3xl font-bold">
								Join DoveVerse today.
							</p>
							<button
								onClick={() => setShowModal(true)}
								className="w-full rounded-full bg-blue-500 px-5 py-2.5 text-center text-xl font-semibold text-white hover:bg-opacity-[85%] focus:outline-none focus:ring-4 sm:w-auto"
							>
								Sign in
							</button>
						</div>
					</div>
				</div>
			</div>
			{showModal && <LoginModal onClose={() => setShowModal(false)} />}
		</>
	);
}
