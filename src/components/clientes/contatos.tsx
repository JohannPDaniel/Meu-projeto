interface contatosProps {
    typeContato: string,
    required?: boolean
}
export const Contatos = ({ typeContato, required }: contatosProps) => {
	return (
		<div className='w-full flex flex-col gap-3 border border-gray-300 rounded-lg p-4'>
			<h3 className='text-[16px] font-bold'>{typeContato}</h3>

			<div className='grid lg:grid-cols-3 gap-4'>
				<label className='flex flex-col gap-2'>
					<span className='text-[14px] font-bold'>
						Nome {required && <span className='text-red-500'>*</span>}
					</span>
					<input
						type='text'
						name='name'
						placeholder='Nome do Responsável'
						required={required}
						className='text-[14px] border border-gray-300 py-2 pl-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</label>
				<label className='flex flex-col gap-2'>
					<span className='text-[14px] font-bold'>
						Telefone {required && <span className='text-red-500'>*</span>}
					</span>
					<input
						type='text'
						name='phone'
						placeholder='(00) 00000-0000'
						required={required}
						className='text-[14px] border border-gray-300 py-2 pl-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</label>
				<label className='flex flex-col gap-2'>
					<span className='text-[14px] font-bold'>
						E-mail {required && <span className='text-red-500'>*</span>}
					</span>
					<input
						type='email'
						name='email'
						placeholder='contato@empresa.com'
						required={required}
						className='text-[14px] border border-gray-300 py-2 pl-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</label>
			</div>
		</div>
	);
};
