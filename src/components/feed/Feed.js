import React from 'react';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Tweet from '../Tweet';

export default function Feed() {
	const { status, data: session } = useSession();
	return (
		<div className="flex flex-col flex-grow p-5">
			<h2>
				<Link href="/" className="font-semibold text-lg">
					Home
				</Link>
			</h2>
			<div>
				<Tweet />
			</div>
		</div>
	);
}
