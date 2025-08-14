import { ImageIcon, Share } from 'lucide-react';

export default function Midia() {
	return (
		<div className='flex flex-col gap-2 mt-3'>
			<div className='flex flex-col gap-2'>
				<h3 className='text-[14px] font-bold'>Logo da Empresa</h3>
				<div className='flex flex-col items-center gap-3 border-2 border-gray-300 border-dashed p-6 rounded-lg'>
					<Share
						size={35}
						strokeWidth={2}
						className='text-gray-500'
					/>
					<p className='text-[14px] text-gray-500'>
						Arraste uma imagem ou clique para selecionar
					</p>
					<label>
						<span className='text-[14px] font-bold border border-gray-200 px-3.5 py-2.5 rounded-xl cursor-pointer hover:bg-blue-100 hover:text-blue-900 hover:shadow-lg'>
							Escolher Arquivo
						</span>
						<input
							type='file'
							className='sr-only'
						/>
					</label>
				</div>
			</div>

			<small className='text-[12px] text-gray-500'>
				Formatos aceitos: PNG, JPG. Tamanho máximo: 2MB
			</small>

			<div className='flex flex-col gap-2'>
				<h3 className='text-[14px] font-bold'>Imagem de Fundo</h3>
				<div className='flex flex-col items-center gap-3 border-2 border-gray-300 border-dashed p-6 rounded-lg'>
					<ImageIcon
						size={35}
						strokeWidth={2}
						className='text-gray-500'
					/>
					<p className='text-[14px] text-gray-500'>Imagem de fundo opcional</p>
					<label>
						<span className='text-[14px] font-bold border border-gray-200 px-3.5 py-2.5 rounded-xl cursor-pointer hover:bg-blue-100 hover:text-blue-900 hover:shadow-lg'>
							Escolher Arquivo
						</span>
						<input
							type='file'
							className='sr-only'
						/>
					</label>
				</div>
			</div>
		</div>
	);
}
