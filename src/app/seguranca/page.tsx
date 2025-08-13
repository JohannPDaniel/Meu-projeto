import { AppLayout } from '../../components/appLayout';
import { VigenciaInput } from "../../components/configurações/vigencyInput";
import { RadioButton } from '../../components/seguranca/radioButton';

export default function Seguranca() {
	return (
		<AppLayout>
			<h1 className='text-2xl font-bold xss:text-center md:text-start'>Segurança & Perfis de Acesso</h1>

			<div className='grid lg:grid-cols-2 gap-4'>
				<div className='flex flex-col gap-3 border border-gray-300 rounded-xl p-6'>
					<h1 className='text-2xl font-bold'>Política de Senhas</h1>

					<RadioButton title='Mínimo 8 caracteres' />

					<RadioButton title='Complexidade (maiúscula, número, símbolo)' />

					<RadioButton title='Expiração a cada 90 dias' />

					<VigenciaInput
						text='Tentativas máximas de login'
						valorExterno={5}
					/>

					<form className='flex justify-end mt-3'>
						<button type="submit" className='bg-[#113b94] px-4 py-3 rounded-[10px] text-[14px] text-white font-bold'>
							Salvar
						</button>
					</form>
				</div>
				<div className='flex flex-col gap-3 border border-gray-300 rounded-xl p-6'>
					<h1 className='text-2xl font-bold'>
						Autenticação em 2 Fatores (2FA)
					</h1>

					<RadioButton title='Exigir 2FA para Administradores' />

					<RadioButton title='Permitir 2FA para todos os usuários' />

					<form className='flex justify-end mt-3'>
						<button type="submit" className='bg-gray-300 px-4 py-3 rounded-[10px] text-[14px] text-black font-bold'>
							Configurar Provedor
						</button>
					</form>
				</div>
			</div>
		</AppLayout>
	);
}
