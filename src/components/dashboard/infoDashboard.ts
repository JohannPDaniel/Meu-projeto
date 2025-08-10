import { Activity, DollarSign, Target, TrendingUp } from "lucide-react";

export const infoDashboard = [
	{
		icon: Target,
		colorIcon: '#21c45d',
		title: 'Campanhas Ativas',
		number: '12',
		paragraphy1: 'Em execução no momento',
		paragraphy2: '+8% vs mês anterior',
	},
	{
		icon: DollarSign,
		colorIcon: '#0c3a97',
		title: 'Descontos Concedidos',
		number: 'R$ 1,2M',
		paragraphy1: 'Total no mês atual',
		paragraphy2: '+15% vs mês anterior',
	},
	{
		icon: Activity,
		colorIcon: '#0c3a97',
		title: 'Transações com Promoção',
		number: '8.4k',
		paragraphy1: 'Nos últimos 30 dias',
		paragraphy2: '+12% vs período anterior',
	},
	{
		icon: TrendingUp,
		colorIcon: '#21c45d',
		title: 'Taxa de Conversão',
		number: '67%',
		paragraphy1: 'Campanhas aproveitadas',
		paragraphy2: '+3% vs semana anterior',
	},
];
