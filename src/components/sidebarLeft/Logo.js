import Dove from '@/icons/Dove';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
	return (
		<div className="xl:mb-4">
			<Link
				href={'/'}
				className="flex items-center justify-center rounded-full py-3 xl:pt-0 xl:h-12 xl:w-12 xl:hover:bg-gray-500/30"
			>
				<Dove className="inline-block h-8 w-8 fill-white" />
			</Link>
		</div>
	);
}
