import { AppLayout } from "../../components/appLayout";

export default function Relatorios() {
	return (
		<AppLayout>
			<h1 className='text-2xl font-bold'>Relatórios & Analytics</h1>

			<div className='flex flex-col gap-4 border border-gray-300 p-6 rounded-xl'>
				<h1 className='text-xl font-bold'>Relatórios Sugeridos</h1>

				<table>
					<thead className="p-9">
						<tr>
							<th className="text-start py-4 border-b">Relatório</th>
							<th className="text-start py-4 border-b">Descrição</th>
							<th className="text-end py-4 border-b">Ação</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="py-4 border-b">Descontos por Período</td>
							<td className="py-4 border-b">Valor total de descontos por dia/mês/campanha</td>
							<td className="text-end py-4 border-b">
								<button>Visualizar</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</AppLayout>
	);
}
