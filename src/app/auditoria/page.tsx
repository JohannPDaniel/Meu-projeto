import { AppLayout } from '../../components/appLayout';
import { tableAuditoria } from '../../components/auditoria/tableAuditoria';

export default function auditoria() {
	return (
		<AppLayout>
			<h1 className='text-2xl font-bold'>Auditoria do Sistema</h1>

			<div className='flex sm:flex-col xl:flex-row gap-4'>
				<form className='flex flex-1 flex-col gap-4 border border-gray-300 rounded-xl p-6'>
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

				<div className='flex flex-2 flex-col gap-4 border border-gray-300 rounded-xl p-6'>
					<div className='flex items-center justify-between'>
						<h1 className='text-xl font-bold'>Eventos Recentes</h1>

						<button className='peer text-[14px] px-4 py-2 border border-gray-300 rounded-xl font-bold hover:bg-blue-100 hover:text-blue-900 cursor-pointer hover:shadow-lg'>
							Exportar CSV
						</button>
					</div>

					{/* MOBILE: timeline/cards (até md) */}
					<div className='lg:hidden'>
						<ul className='space-y-4'>
							{tableAuditoria.map((ta, i) => (
								<li
									key={i}
									className='relative pl-6'>
									{/* linha/dot da timeline */}
									<span className='absolute left-2 top-0 bottom-0 w-px bg-gray-200' />
									<span
										className={`absolute left-0 top-2 w-4 h-4 rounded-full ring-4 ring-white
            ${
							ta.status?.toLowerCase() === 'ok' ? 'bg-green-600' : 'bg-red-600'
						}`}
									/>

									{/* card */}
									<div className='rounded-xl border border-gray-200 p-3 shadow-sm'>
										<div className='flex items-start justify-between gap-3'>
											<div className='text-[13px] text-gray-500 leading-tight'>
												{ta.quando}
											</div>
											<span
												className={`px-2 py-0.5 rounded-2xl text-[12px] font-bold
                ${
									ta.status?.toLowerCase() === 'ok'
										? 'bg-green-600 text-white'
										: ta.status?.toLowerCase() === 'erro'
										? 'bg-red-600 text-white'
										: 'bg-gray-200 text-gray-800'
								}`}>
												{ta.status}
											</span>
										</div>

										<div className='mt-2 grid grid-cols-1 gap-1 text-[14px]'>
											<div>
												<span className='font-medium text-gray-700'>
													Usuário:{' '}
												</span>
												<span className='text-gray-600'>{ta.usuario}</span>
											</div>
											<div>
												<span className='font-medium text-gray-700'>IP: </span>
												<span className='text-gray-600'>{ta.ip}</span>
											</div>
											<div className='flex items-center gap-2'>
												<span className='font-medium text-gray-700'>
													Entidade:
												</span>
												<span className='bg-gray-100 rounded-2xl px-2 py-0.5 text-[12px] font-bold text-gray-800'>
													{ta.entidade}
												</span>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Ação:{' '}
												</span>
												<span className='text-gray-600'>{ta.acao}</span>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>

					{/* DESKTOP/TABLET: tabela (lg+) */}
					<div className='hidden lg:block'>
						<div className='max-h-80 overflow-y-auto rounded-xl'>
							<table className='min-w-full'>
								<thead className='sticky top-0 bg-white z-10'>
									<tr>
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
										<th className='text-center text-[14px] text-gray-500 py-3 pr-3'>
											Status
										</th>
									</tr>
								</thead>
								<tbody>
									{tableAuditoria.map((ta, index) => (
										<tr
											key={index}
											className='border-t border-gray-300 hover:bg-gray-50'>
											<td className='text-left text-[14px] text-gray-500 py-3 pl-3'>
												{ta.quando}
											</td>
											<td className='text-left text-[14px] text-gray-500 py-3'>
												{ta.usuario}
											</td>
											<td className='text-left text-[14px] text-gray-500 py-3'>
												{ta.ip}
											</td>
											<td className='text-left text-[13px] text-black font-bold py-3'>
												<span className='bg-gray-100 rounded-2xl px-2 py-1'>
													{ta.entidade}
												</span>
											</td>
											<td className='text-left text-[14px] text-gray-500 py-3'>
												{ta.acao}
											</td>
											<td className='text-center text-[13px] text-white py-3 pr-3'>
												<span
													className={`px-2 py-1 rounded-2xl font-bold text-[12px]
                  ${
										ta.status?.toLowerCase() === 'ok'
											? 'bg-green-600'
											: ta.status?.toLowerCase() === 'erro'
											? 'bg-red-600'
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
