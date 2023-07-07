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
				className={`fixed w-11/12 max-w-xl text-center top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-black px-12 py-5  rounded-md transition-all  ${
					fading ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
				}`}
			>
				<div className="w-3/4 mx-auto mb-10">
					<button
						className="absolute left-5 top-5"
						onClick={() => hideModal()}
						aria-label="close"
					>
						<CloseIcon />
					</button>
					<Twitter className="w-10 fill-white mx-auto mb-6" />
					<h2 className="text-3xl font-bold text-white mb-8">
						Sign in to DoveVerse
					</h2>
					<button
						className="text-md w-full inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
