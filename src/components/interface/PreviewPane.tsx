import { Eye } from 'lucide-react';
import { useInterfaceConfig } from '../../app/interface/interface-config';

export function PreviewPane() {
	const { message, count, limit } = useInterfaceConfig();

	return (
		<div className='flex flex-col gap-4 border border-gray-300 p-6 rounded-xl'>
			<div className='flex items-center gap-4'>
				<Eye
					size={22}
					strokeWidth={2}
					className='text-blue-900'
				/>
				<h1 className='text-2xl font-bold'>Preview do Terminal</h1>
			</div>

			{/* Parte que será */}
			<div className='flex flex-col gap-4 bg-[#1d2739] px-5 py-8 rounded-lg'>
				<div className='flex flex-col items-center gap-3 bg-[#334154] p-5 rounded-lg'>
					<div className='w-full bg-[#475568] py-3 rounded-sm'></div>
					<div className='w-80 bg-[#475568] py-2 rounded-sm'></div>
				</div>
				<div className='flex flex-col gap-1 items-center bg-white py-5 rounded-xl'>
					<h1
						className='text-xl text-center font-bold text-blue-800 w-full max-w-[420px] px-2 whitespace-pre-line break-words '>
						{message.trim() || 'Mensagem aparecerá aqui'}
					</h1>
					<p className='text-[14px] text-gray-600'>
						Insira ou aproxime seu cartão
					</p>
				</div>

				<div className='flex gap-3'>
					<div className='w-full bg-[#334154] py-4 rounded-sm'></div>
					<div className='w-full bg-[#334154] py-4 rounded-sm'></div>
					<div className='w-full bg-[#334154] py-4 rounded-sm'></div>
				</div>
			</div>

			<hr className='border-gray-200' />

			<div className='flex flex-col gap-2'>
				<div className='flex justify-between'>
					<p className='text-[14px] text-gray-500'>Fonte:</p>
					<p className='text-[14px]'>Arial</p>
				</div>
				<div className='flex justify-between'>
					<p className='text-[14px] text-gray-500'>Tamanho:</p>
					<p className='text-[14px]'>16px</p>
				</div>
				<div className='flex justify-between'>
					<p className='text-[14px] text-gray-500'>Cor:</p>
					<div className='flex items-center gap-2'>
						<div className='w-4 h-4 bg-blue-700 rounded-sm'></div>
						<p className='text-[14px]'>#1E40AF</p>
					</div>
				</div>
				<div className='flex justify-between'>
					<p className='text-[14px] text-gray-500'>Caracteres:</p>
					<p className='text-[14px]'>
						{count}/{limit}
					</p>
				</div>
			</div>
		</div>
	);
}
