import { AppLayout } from '../../components/appLayout';
import { contentTbody } from "../../components/relatorios/contentTable";

export default function Relatorios() {
	return (
		<AppLayout>
			<h1 className='text-2xl font-bold'>Relatórios & Analytics</h1>

			<div className='xss:text-center md:text-start border border-gray-300 p-6 rounded-xl'>
				<h2 className='text-xl font-bold mb-4'>Relatórios Sugeridos</h2>

				{/* MOBILE: cards (até sm) */}
				<div className='grid gap-3 md:hidden'>
					{contentTbody.map((ct, i) => (
						<div
							key={i}
							className='rounded-xl border border-gray-200 p-4 hover:bg-gray-50 transition'>
							<div className='text-[15px] font-semibold text-gray-800'>
								{ct.content1}
							</div>
							<div className='mt-1 text-[14px] text-gray-500'>
								{ct.content2}
							</div>
							<div className='mt-3'>
								<button className='w-full px-3 py-2 bg-gray-100 rounded-xl text-[14px] font-bold hover:shadow-lg'>
									{ct.contentButton}
								</button>
							</div>
						</div>
					))}
				</div>

				{/* DESKTOP/TABLET: tabela (sm+) */}
				<div className='hidden md:block'>
					<div className='overflow-x-auto'>
						<table className='min-w-full'>
							<thead>
								<tr className='border-b border-gray-300'>
									<th className='text-left text-[14px] text-gray-500 py-3 md:pl-0 lg:pl-3'>
										Relatório
									</th>
									<th className='text-left text-[14px] text-gray-500 py-3'>
										Descrição
									</th>
									<th className='text-right text-[14px] text-gray-500 py-3 md:pr-0 lg:pr-4'>
										Ação
									</th>
								</tr>
							</thead>
							<tbody>
								{contentTbody.map((ct, i) => (
									<tr
										key={i}
										className='border-t border-gray-300 hover:bg-gray-50'>
										<td className='py-4 md:pl-0 lg:pl-3 text-[14px] text-gray-700'>
											{ct.content1}
										</td>
										<td className='py-4 text-[14px] text-gray-500'>
											{ct.content2}
										</td>
										<td className='py-4 md:pr-0 lg:pr-3 text-right'>
											<button className='px-3 py-2 bg-gray-100 rounded-xl text-[14px] font-bold hover:shadow-lg'>
												{ct.contentButton}
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="group flex justify-end mt-3">
					<button className="border border-gray-300 px-3.5 py-2.5 rounded-xl text-[14px] font-bold cursor-pointer hover:text-blue-900 hover:bg-blue-100 hover:shadow-lg">Exportar CSV</button>
				</div>
			</div>
		</AppLayout>
	);
}
