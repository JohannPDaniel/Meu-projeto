import gopaid from '@/assets/gopaid.png';
import { Lock, Mail, Shield, User } from 'lucide-react';
import Image from 'next/image';

export default function SignIn() {
	return (
		<div className='w-full h-screen flex flex-col gap-5 items-center justify-center'>
			<div className='max-w-[450px] flex items-center justify-center gap-2'>
				<div className='flex flex-col items-end justify-end'>
					<Image
						src={gopaid}
						alt='Go Paid'
						className='w-[50px]'
					/>
				</div>
				<div className='flex flex-col items-center justify-start'>
					<h1 className='text-[35px] font-bold text-blue-800 leading-tight'>
						GOPaid
					</h1>
					<p className='text-sm text-gray-500 m-0'>
						Motor de Promoções & Benefícios
					</p>
				</div>
			</div>

			<div
				className='xss:w-[305px] xs:w-[355px] sm:w-[400px] md:w-[420px] lg:w-[450px] h-auto rounded-2xl flex flex-col items-center shadow-xl pb-2'
				style={{ backgroundColor: '#fefdff' }}>
				<h1 className='text-2xl pt-6 font-[500]'>Acesso ao Sistema</h1>
				<p className='text-sm text-gray-400 mt-1'>
					Entre com suas credenciais para continuar
				</p>

				<form className='w-full mt-2 px-6 pt-6 flex flex-col gap-4'>
					<label className='flex flex-col'>
						<span className='pb-2 text-sm font-[600]'>E-mail</span>
						<div className='relative'>
							<Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4' />
							<input
								type='email'
								placeholder='seu@email.com'
								className='pl-10 pr-4 py-2 text-[14px] w-full border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
					</label>

					<label className='flex flex-col'>
						<span className='pb-2 text-sm font-[600]'>Senha</span>
						<div className='relative'>
							<Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4' />
							<input
								type='password'
								placeholder='Sua senha'
								className='pl-10 pr-4 py-2 text-[14px] w-full border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
					</label>

					<button className='w-full py-2 rounded-[10px] text-white font-medium bg-gradient-to-r from-blue-800 to-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg'>
						Entrar
					</button>
				</form>

				<div className='w-full mt-2 px-6 py-4 flex flex-col gap-3'>
					<hr className='border-x border-gray-300' />
					<p className='text-[14px] text-gray-500 text-center'>
						Usuários demo para teste:
					</p>

					<div className='flex px-3 xs:p-2 xss:p-1 group border border-gray-300 h-[60px] rounded-[12px] cursor-pointer hover:bg-blue-50 transition-colors duration-200'>
						<div className='pr-3 xs:pr-2 xss:pr-1 flex flex-col items-center justify-center'>
							<Shield className='w-5 h-5 text-blue-700' />
						</div>

						<div className='w-80 xs:w-50 xss:w-40 flex flex-col justify-center'>
							<h1 className='text-[14px] font-bold transition-colors group-hover:text-blue-500'>
								Admin GoPaid
							</h1>
							<p className='text-[12px] text-gray-700'>admin@gopaid.com</p>
						</div>

						<div className='w-full flex items-center justify-end text-[12px]'>
							<h2 className='font-medium bg-gray-200 px-3 py-0.5 rounded-[10px]'>
								Administrador
							</h2>
						</div>
					</div>

					<div className='flex px-3 xs:p-2 xss:p-1 group border border-gray-300 h-[60px] rounded-[12px] cursor-pointer hover:bg-blue-50 transition-colors duration-200'>
						<div className='pr-3 xs:pr-2 xss:pr-1 flex flex-col items-center justify-center'>
							<User className='w-5 h-5 text-green-500' />
						</div>
						<div className='w-80 xs:w-50 xss:w-40 flex flex-col justify-center'>
							<h1 className='text-[14px] font-bold transition-colors group-hover:text-blue-500'>
								João Silva
							</h1>
							<p className='text-[12px] xss:text-[10px]'>gerente@gopaid.com</p>
						</div>
						<div className='w-full flex items-center justify-end text-[12px] xss:text-[10px] xss:text-center xs:text-[12px]'>
							<h2 className='font-medium bg-gray-200 px-2.5 py-0.5 rounded-[10px]'>
								Gerente de Campanhas
							</h2>
						</div>
					</div>

					<div className='flex px-3 xs:p-2 xss:p-1 group border border-gray-300 h-[60px] rounded-[12px] cursor-pointer hover:bg-blue-50 transition-colors duration-200'>
						<div className='pr-3 xs:pr-2 xss:pr-1 flex flex-col items-center justify-center'>
							<Shield className='w-5 h-5 text-amber-600' />
						</div>
						<div className='w-80 xs:w-50 xss:w-40 flex flex-col justify-center'>
							<h1 className='text-[14px] font-bold transition-colors group-hover:text-blue-500'>
								Maria Santos
							</h1>
							<p className='text-[12px]'>aprovador@gopaid.com</p>
						</div>
						<div className='w-full flex items-center justify-end text-[12px]'>
							<h2 className='font-medium bg-gray-200 px-3 py-0.5 rounded-[10px]'>
								aprovador
							</h2>
						</div>
					</div>

					<div className='flex px-3 xs:p-2 xss:p-1 group border border-gray-300 h-[60px] rounded-[12px] cursor-pointer hover:bg-blue-50 transition-colors duration-200'>
						<div className='pr-3 xs:pr-2 xss:pr-1 flex flex-col items-center justify-center'>
							<User className='w-5 h-5 text-gray-400' />
						</div>
						<div className='w-80 xs:w-50 xss:w-40 flex flex-col justify-center'>
							<h1 className='text-[14px] font-bold transition-colors group-hover:text-blue-500'>
								Carlos Oliveira
							</h1>
							<p className='text-[12px]'>auditor@gopaid.com</p>
						</div>
						<div className='w-full flex items-center justify-end text-[12px]'>
							<h2 className='font-medium bg-gray-200 px-3 py-0.5 rounded-[10px]'>
								Auditor
							</h2>
						</div>
					</div>
				</div>
			</div>
			<p className='text-[12px] xss:text-center xs:text-center text-gray-500'>
				Sistema protegido por controle de acesso baseado em funções (RBAC)
			</p>
		</div>
	);
}
