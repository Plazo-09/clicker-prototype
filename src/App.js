import { useState, useEffect } from 'react';

function App() {
	const [clicks, setClicks] = useState(0);

	useEffect(() => {
		const localClicks = localStorage.getItem('clicks');
		if (localClicks) setClicks(Number(localClicks));
		else localStorage.setItem('clicks', clicks);
	}, []);

	const handleClick = () => {
		setClicks(Number(clicks + 1));
		localStorage.setItem('clicks', Number(clicks + 1));
	};

	return (
		<div className='min-w-screen min-h-screen flex flex-col items-center justify-center gap-y-3 bg-gray-900'>
			<h1 className='text-2xl text-white'>Clicks: {clicks}</h1>

			<button
				className='py-[200px] px-[110px] text-4xl bg-blue-400 rounded-md transition-all border-2 border-black active:scale-95'
				onClick={handleClick}
			>
				CLICK
			</button>
		</div>
	);
}

export default App;
