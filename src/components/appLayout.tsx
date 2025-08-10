import { Header } from './header';
import { NavBar } from './NavBar';
import { NavBarMobile } from './NavBarMobile';

interface AppLayoutProps {
	children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className='w-full h-screen flex flex-col'>
			<Header />
			<div className='flex flex-1 pt-16 z-0'>
				<NavBar />
				<main className='flex-1 p-8 overflow-auto mb-25'>{children}</main>
				<NavBarMobile />
			</div>
		</div>
	);
}
