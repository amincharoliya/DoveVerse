import Dove from '@/icons/Dove';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
	return (
		<div className="mb-4">
			<Link
				href={'/'}
				className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-gray-500/30"
			>
				<Dove className="inline-block h-8 w-8 fill-white" />
			</Link>
		</div>
	);
}
