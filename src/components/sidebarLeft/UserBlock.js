import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Logout from '@/icons/Logout';

export default function UserBlock() {
	const { data: session } = useSession();
	const { name, image } = session.user;
	return (
		<div className="mt-auto flex w-full items-center justify-start pt-5">
			<div className="hidden xl:block mr-5 overflow-hidden rounded-full">
				<Image src={image} height={60} width={60} alt={name} />
			</div>
			<div className="hidden xl:block">
				<p>{name}</p>
				<button className="flex items-center" onClick={signOut}>
					<Logout className="h-4 w-4 mr-1" />
					Sign out
				</button>
			</div>
			<div className="flex justify-center w-full pb-5 xl:hidden">
				<button
					className="flex items-center justify-center"
					onClick={signOut}
				>
					<Logout className="h-7 w-7" />
				</button>
			</div>
		</div>
	);
}
