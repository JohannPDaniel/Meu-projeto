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
		<>
			<nav className='hidden md:flex md:w-[205px] lg:w-[220px] xl:w-[250px] h-full border-r border-gray-300 md:p-4 lg:px-4 lg:py-9 flex-col gap-3 relative z-0'>
				{menus.map((menu) => (
					<Menu
						key={menu.href}
						{...menu}
						isActive={pathname === menu.href}
					/>
				))}
			</nav>
		</>
	);
};
