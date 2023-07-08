import React from 'react';

import { useSession } from 'next-auth/react';

export default function Feed() {
	const { status, data: session } = useSession();
	return (
		<div className="flex flex-grow p-5">
			<h1>Homepage</h1>
		</div>
	);
}
