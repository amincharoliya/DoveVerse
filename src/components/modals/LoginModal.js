import { useEffect, useState } from 'react';

import { signIn } from 'next-auth/react';

// Icons
import CloseIcon from '@/icons/CloseIcon';
import GitHub from '@/icons/GitHub';
import Twitter from '@/icons/Dove';

export default function LoginModal({ onClose }) {
	const [fading, setFading] = useState(true);

	useEffect(() => {
		setFading(false);
	}, []);

	const hideModal = () => {
		setFading(true);
		setTimeout(() => {
			onClose();
		}, 300);
	};

	return (
		<div
			className={`fixed inset-0 w-full bg-gray-500 bg-opacity-30 transition-opacity duration-300 ${
				fading ? 'opacity-0' : 'opacity-100'
			}`}
		>
			<div
				className={`fixed left-[50%] top-[50%] z-10 w-11/12 max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-black px-12 py-5 text-center  text-white transition-all  ${
					fading ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
				}`}
			>
				<div className="mx-auto mb-10 w-3/4">
					<button
						className="absolute left-5 top-5"
						onClick={() => hideModal()}
						aria-label="close"
					>
						<CloseIcon />
					</button>
					<Twitter className="mx-auto mb-6 w-10 fill-white" />
					<h2 className="mb-8 text-3xl font-bold text-white">
						Sign in to DoveVerse
					</h2>
					<button
						className="text-md inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
						onClick={() => signIn()}
					>
						<GitHub className="w-7" />
						Sign in with GitHub
					</button>
				</div>
			</div>
		</div>
	);
}
