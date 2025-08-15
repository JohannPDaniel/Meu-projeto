export const titleTransaction = [
	'ID',
	'Terminal',
	'Cliente',
	'Valor',
	'Pagamento',
	'Status',
	'Data/Hora',
	'Referência',
];

export const tableEventos = [
	'Timestamp',
	'Terminal',
	'Evento',
	'Descrição',
	'Severidade',
];

export const contentTbodyEventos = [
	{
		timestamp: '2024-01-15 14:35:20',
		terminal: 'TRM001',
		evento: 'payment_started',
		descricao: 'Pagamento iniciado pelo usuário',
		severidade: 'Info',
	},
	{
		timestamp: '2024-01-15 14:35:22',
		terminal: 'TRM001',
		evento: 'payment_completed',
		descricao: 'Pagamento PIX processado com sucesso',
		severidade: 'Sucesso',
	},
	{
		timestamp: '2024-01-15 14:20:15',
		terminal: 'TRM002',
		evento: 'connection_lost',
		descricao: 'Conexão com servidor perdida',
		severidade: 'Erro',
	},
	{
		timestamp: '2024-01-15 09:00:00',
		terminal: 'TRM003',
		evento: 'terminal_startup',
		descricao: 'Terminal iniciado com sucesso',
		severidade: 'Info',
	},
];

export const contentTbodyTransaction = [
	{
		id: 'TXN001',
		terminal: {
			nome: 'Terminal Paulista 01',
			codigo: 'TRM001',
		},
		cliente: 'João Silva',
		valor: 'R$ 25.50',
		pagamento: 'PIX',
		status: 'Concluida',
		dataHora: '2024-01-15 14:35:22',
		referencia: 'REF123456',
	},
	{
		id: 'TXN002',
		terminal: {
			nome: 'Terminal Paulista 01',
			codigo: 'TRM001',
		},
		cliente: 'Maria Santos',
		valor: 'R$ 45.90',
		pagamento: 'Credit',
		status: 'Concluida',
		dataHora: '2024-01-15 14:28:10',
		referencia: 'REF123457',
	},
	{
		id: 'TXN003',
		terminal: {
			nome: 'Terminal Shopping Center',
			codigo: 'TRM002',
		},
		cliente: 'Pedro Costa',
		valor: 'R$ 89.75',
		pagamento: 'Credit',
		status: 'Falhada',
		dataHora: '2024-01-15 14:15:45',
		referencia: 'REF123458',
	},
	{
		id: 'TXN004',
		terminal: {
			nome: 'Terminal Aeroporto',
			codigo: 'TRM003',
		},
		cliente: 'Ana Oliveira',
		valor: 'R$ 12.30',
		pagamento: 'PIX',
		status: 'Pendente',
		dataHora: '2024-01-15 14:05:33',
		referencia: 'REF123459',
	},
];