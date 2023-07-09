import React from 'react';

export default function Button({ children, onClick = () => {} }) {
	return (
		<button
			onClick={() => onClick()}
			className="min-w-[70px] inline-block px-2 py-1 rounded-2xl bg-white text-black text-sm font-semibold duration-300 hover:bg-white/90"
		>
			{children}
		</button>
	);
}
