import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function UserBlock() {
	const { data: session } = useSession();
	const { name, image } = session.user;
	return (
		<div className="mt-auto flex w-full items-center justify-start pt-5">
			<div className="mr-5 overflow-hidden rounded-full">
				<Image src={image} height={60} width={60} alt={name} />
			</div>
			<div>
				<p>{name}</p>
				<button onClick={signOut}>Sign out</button>
			</div>
		</div>
	);
}
