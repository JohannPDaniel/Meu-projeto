import { AppLayout } from '../../components/appLayout';
import { tableAuditoria } from '../../components/auditoria/tableAuditoria';

export default function auditoria() {
	return (
		<AppLayout>
			<h1 className='text-2xl font-bold'>Auditoria do Sistema</h1>

			<div className='flex  gap-4'>
				<form className='w-[33%] flex flex-col gap-4 border border-gray-300 rounded-xl p-6'>
					<h1 className='text-xl font-bold'>Filtros</h1>

					<label className='flex flex-col gap-2'>
						<span className='text-[14px] font-bold'>Usuários</span>
						<input
							type='email'
							placeholder='e-mail'
							className='text-[14px] border border-gray-300 rounded-xl py-2 pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</label>
					<label className='flex flex-col gap-2'>
						<span className='text-[14px] font-bold'>Entidade</span>
						<input
							type='text'
							placeholder='campaign, user, settings...'
							className='text-[14px] border border-gray-300 rounded-xl py-2 pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</label>
					<label className='flex flex-col gap-2'>
						<span className='text-[14px] font-bold'>Período</span>
						<div className='flex gap-2'>
							<input
								type='date'
								placeholder='campaign, user, settings...'
								className='w-full text-[14px] border border-gray-300 rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							<input
								type='date'
								placeholder='campaign, user, settings...'
								className='w-full text-[14px] border border-gray-300 rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
					</label>

					<button
						type='submit'
						className='w-full py-2 px-3 bg-[#113b94] rounded-xl text-white'>
						Aplicar
					</button>
				</form>

				<div className='w-[64%] flex flex-col gap-4 border border-gray-300 rounded-xl p-6'>
					<div className='flex items-center justify-between'>
						<h1 className='text-xl font-bold'>Eventos Recentes</h1>

						<button className='peer text-[14px] px-4 py-2 border border-gray-300 rounded-xl font-bold hover:bg-blue-100 hover:text-blue-900 cursor-pointer hover:shadow-lg'>
							Exportar CSV
						</button>
					</div>

					<div
						className='max-h-100 overflow-y-auto rounded-xl [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent]
    [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-[#e5e7eb]
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent
    [&::-webkit-scrollbar-thumb]:bg-clip-content
    hover:[&::-webkit-scrollbar-thumb]:bg-[#cbd5e1]'>
						<table className='min-w-full'>
							<thead className='sticky top-0 bg-white z-10'>
								<tr className='border-gray-300 hover:bg-gray-50'>
									<th className='text-left text-[14px] text-gray-500 py-3 pl-3'>
										Quando
									</th>
									<th className='text-left text-[14px] text-gray-500 py-3'>
										Usuário
									</th>
									<th className='text-left text-[14px] text-gray-500 py-3'>
										IP
									</th>
									<th className='text-left text-[14px] text-gray-500 py-3'>
										Entidade
									</th>
									<th className='text-left text-[14px] text-gray-500 py-3'>
										Ação
									</th>
									<th className='text-center text-[14px] text-gray-500 py-3'>
										Status
									</th>
								</tr>
							</thead>

							<tbody>
								{tableAuditoria.map((ta, index) => (
									<tr
										key={index}
										className='border-t border-gray-300 hover:bg-gray-50'>
										<td className='text-left text-[14px] text-gray-500 py-5 pl-3'>
											{ta.quando}
										</td>
										<td className='text-left text-[14px] text-gray-500 py-5'>
											{ta.usuario}
										</td>
										<td className='text-left text-[14px] text-gray-500 py-5'>
											{ta.ip}
										</td>
										<td className='text-left text-[12px] text-black font-bold py-5'>
											<span className='bg-gray-100 rounded-2xl px-2 py-1'>
												{ta.entidade}
											</span>
										</td>
										<td className='text-left text-[14px] text-gray-500 py-5'>
											{ta.acao}
										</td>
										<td className='text-center py-3'>
											<span
												className={`inline-flex items-center px-3 py-1 rounded-2xl text-[12px] font-bold
											${
												ta.status === 'OK'
													? 'bg-green-600 text-white'
													: ta.status === 'Erro'
													? 'bg-red-600 text-white'
													: 'bg-gray-300 text-gray-800'
											}`}>
												{ta.status}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className='flex justify-end'>
						<button className='bg-gray-100 text-black font-bold text-[14px] px-4 py-3 rounded-xl hover:shadow-lg cursor-pointer'>
							Ver mais
						</button>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}
