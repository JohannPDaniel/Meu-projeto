import {
	BarChart2,
	Building2,
	CheckCircle,
	CreditCard,
	FileText,
	Globe,
	Home,
	Mail,
	Monitor,
	Palette,
	Search,
	Settings,
	Shield,
	Trash2,
	Users,
} from 'lucide-react';

export const NavBarMobile = () => {
	const menus = [
		{
			icon: Home,
			title: 'Dashboard',
			paragraphy: 'Visão geral do sistema',
			href: '/dashboard',
		},
		{
			icon: Building2,
			title: 'Clientes',
			paragraphy: 'Gestão de empresas',
			href: '/clientes',
		},
		{
			icon: Monitor,
			title: 'Terminais',
			paragraphy: 'Controle de terminais',
			href: '/terminais',
		},
		{
			icon: Palette,
			title: 'Interface',
			paragraphy: 'Config. visual',
			href: '/interface',
		},
		{
			icon: CreditCard,
			title: 'Transações',
			paragraphy: 'Pagamentos e logs',
			href: '/transacoes',
		},
		{
			icon: CheckCircle,
			title: 'Aprovações',
			paragraphy: 'Workflow de aprovação',
			href: '/aprovacoes',
		},
		{
			icon: FileText,
			title: 'Auditoria',
			paragraphy: 'Logs do sistema',
			href: '/auditoria',
		},
		{
			icon: Users,
			title: 'Usuários',
			paragraphy: 'Gerenciar acessos',
			href: '/usuarios',
		},
		{
			icon: Shield,
			title: 'Segurança',
			paragraphy: 'Controle de acesso',
			href: '/seguranca',
		},
		{
			icon: Settings,
			title: 'Configurações',
			paragraphy: 'Parâmetros gerais',
			href: '/configuracoes',
		},
		{
			icon: BarChart2,
			title: 'Relatórios',
			paragraphy: 'Analytics e métricas',
			href: '/relatorios',
		},
	];

	return (
		<nav className='fixed bottom-0 left-0 right-0 h-16 bg-gray-700 flex justify-around items-center md:hidden z-50'>
			<button className='flex-1 h-full flex items-center justify-center hover:bg-green-600'>
				<Home className='text-white w-6 h-6' />
			</button>
			<button className='flex-1 h-full flex items-center justify-center hover:bg-green-600'>
				<Search className='text-white w-6 h-6' />
			</button>
			<button className='flex-1 h-full flex items-center justify-center hover:bg-green-600'>
				<Mail className='text-white w-6 h-6' />
			</button>
			<button className='flex-1 h-full flex items-center justify-center hover:bg-green-600'>
				<Globe className='text-white w-6 h-6' />
			</button>
			<button className='flex-1 h-full flex items-center justify-center hover:bg-green-600'>
				<Trash2 className='text-white w-6 h-6' />
			</button>
		</nav>
	);
};
