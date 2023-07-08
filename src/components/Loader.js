import Spinner from '@/icons/Spinner';
import React from 'react';

export default function Loader() {
	return (
		<div className="h-screen w-screen grid place-content-center place-items-center bg-black text-white">
			<Spinner className="h-8 w-8" />
		</div>
	);
}
