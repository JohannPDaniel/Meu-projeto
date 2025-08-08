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
import { MenuMobile } from './menuMobile';


export const NavBarMobile = () => {
	const pathname = usePathname();

	const topRow = [
		{ icon: Home, href: '/dashboard' },
		{ icon: Building2, href: '/clientes' },
		{ icon: Monitor, href: '/terminais' },
		{ icon: Palette, href: '/interface' },
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
						isActive={pathname === menu.href}
					/>
				))}
			</div>

			<div className='grid grid-cols-6 gap-2'>
				{bottomRow.map((menu, i) => (
					<MenuMobile
						key={i}
						href={menu.href}
						icon={menu.icon}
						isActive={pathname === menu.href}
					/>
				))}
			</div>
		</nav>
	);
};
