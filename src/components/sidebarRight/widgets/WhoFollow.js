import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Spinner from '@/icons/Spinner';

export default function WhoFollow() {
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		fetch('/api/users')
			.then((res) => res.json())
			.then((res) => setUsers(res.reverse().slice(0, 5)));
	}, []);

	if (users.length === 0) {
		return (
			<div className="flex justify-center">
				<Spinner className="h-5 w-5 text-white" />
			</div>
		);
	}

	return (
		<section className="bg-gray-500/30 rounded-lg">
			<h2 className="font-semibold text-lg px-3 py-2">Who to Follow</h2>
			<ul>
				{users.map((user) => (
					<li className="flex items-center p-3" key={user.id}>
						<Link href={'/'} className="mr-3">
							<Image
								className="rounded-full"
								src={user.image}
								alt={user.name}
								width={40}
								height={40}
							/>
						</Link>
						<div className="flex flex-1 max-w-[calc(100%-52px)]">
							<Link
								href={'/'}
								className="flex items-center flex-1 max-w-[calc(100%-65px)]"
							>
								<span className="block font-semibold text-sm w-full whitespace-nowrap text-ellipsis overflow-hidden">
									{user.name}
								</span>
							</Link>
							<div className="flex flex-1 justify-end">
								<Button onClick={() => alert('clicked')}>
									Follow
								</Button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
