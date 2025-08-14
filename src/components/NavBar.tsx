'use client';

import {
	BarChart2,
	Building2,
	CheckCircle,
	CreditCard,
	FileText,
	Home,
	Monitor,
	Palette,
	Settings,
	Shield,
	Users,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Menu } from './menu';

export const NavBar = () => {
	const pathname = usePathname();

	// compara só o 1º segmento (mantém "Clientes" azul em /clientes/*)
	const root = (p: string) => '/' + p.replace(/^\/+|\/+$/g, '').split('/')[0];

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
			href: '/clientes/lista',
		}, // <-- direto na lista
		{
			icon: Monitor,
			title: 'Terminais',
			paragraphy: 'Controle de terminais',
			href: '/terminais/cadastrados',
		},
		{
			icon: Palette,
			title: 'Interface',
			paragraphy: 'Config. visual',
			href: '/interface/mensagem',
		},
		{
			icon: CreditCard,
			title: 'Transações',
			paragraphy: 'Pagamentos e logs',
			href: '/transacoes/transactions',
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
		<nav className='hidden md:flex md:w-[205px] lg:w-[220px] xl:w-[250px] h-full border-r border-gray-300 md:p-4 lg:px-4 lg:py-9 flex-col gap-3 relative z-0'>
			{menus.map((m) => (
				<Menu
					key={m.href}
					{...m}
					isActive={root(pathname) === root(m.href)} // ativa também em /clientes/novo, /clientes/xyz...
				/>
			))}
		</nav>
	);
};
