import { Bell } from 'lucide-react';
import Image from 'next/image';
import gopaid from '../assets/gopaid.png';


export const Header = () => {
	return (
		<header className='fixed inset-x-0 top-0 z-50 backdrop-blur-md w-full h-16 bg-white/60 border-b border-gray-300 flex items-center justify-between gap-2 md:px-[30px] xl:px-[80px]'>
			<div className='flex items-center gap-2'>
				<Image
					src={gopaid}
					alt='Go paid'
					className='w-[42px] h-10'
				/>
				<div>
					<h1
						className='text-[20px] font-bold m-0'
						style={{ color: '#113b94' }}>
						GOPaid
					</h1>
					<p className='m-0 text-xs text-gray-400'>Motor de Promoções</p>
				</div>
			</div>

			<div className='flex items-center gap-4'>
				<div className='relative w-7 h-3'>
					<Bell className='w-5 h-5 text-black' />

					<span className='absolute -top-5 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
						3
					</span>
				</div>
				<div className='rounded-full bg-blue-900 px-3 py-1.5 text-white'>A</div>
			</div>
		</header>
	);
};
