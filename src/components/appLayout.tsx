import { Header } from './header';
import { NavBar } from './NavBar';
import { NavBarMobile } from './NavBarMobile';

interface AppLayoutProps {
	children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className='w-full h-screen flex flex-col xss:mb-110 md:mb-0'>
			<Header />
			<div className='flex flex-1 pt-16 z-0'>
				<NavBar />
				<main className='flex-1 p-8 overflow-auto'>{children}</main>
			</div>
			<NavBarMobile />
		</div>
	);
}
