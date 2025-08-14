'use client';
import {
	Home,
	Building2,
	Monitor,
	Palette,
	CreditCard,
	CheckCircle,
	FileText,
	Users,
	Shield,
	Settings,
	BarChart2,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { MenuMobile } from './menuMobile';
// ...

export const NavBarMobile = () => {
	const pathname = usePathname();

	const root = (p: string) => '/' + p.replace(/^\/+|\/+$/g, '').split('/')[0];

	const isActive = (href: string) => {
		// ativo quando é exatamente a rota OU começa com ela
		// OU quando o "root" coincide (ex.: /clientes/novo marca /clientes/lista)
		return (
			pathname === href ||
			pathname.startsWith(href + '/') ||
			root(pathname) === root(href)
		);
	};

	const topRow = [
		{ icon: Home, href: '/dashboard' },
		{ icon: Building2, href: '/clientes/lista' },
		{ icon: Monitor, href: '/terminais/cadastrados' },
		{ icon: Palette, href: '/interface/mensagem' },
		{ icon: CreditCard, href: '/transacoes' },
	];

	const bottomRow = [
		{ icon: CheckCircle, href: '/aprovacoes' },
		{ icon: FileText, href: '/auditoria' },
		{ icon: Users, href: '/usuarios' },
		{ icon: Shield, href: '/seguranca' },
		{ icon: Settings, href: '/configuracoes' },
		{ icon: BarChart2, href: '/relatorios' },
	];

	return (
		<nav className='fixed bottom-0 left-0 right-0 py-2 bg-gray-700 md:hidden z-50 space-y-2'>
			<div className='grid grid-cols-5 gap-2'>
				{topRow.map((menu, i) => (
					<MenuMobile
						key={i}
						href={menu.href}
						icon={menu.icon}
						isActive={isActive(menu.href)}
					/>
				))}
			</div>

			<div className='grid grid-cols-6 gap-2'>
				{bottomRow.map((menu, i) => (
					<MenuMobile
						key={i}
						href={menu.href}
						icon={menu.icon}
						isActive={isActive(menu.href)}
					/>
				))}
			</div>
		</nav>
	);
};
