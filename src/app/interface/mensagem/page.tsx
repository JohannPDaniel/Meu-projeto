import { LimiteDeCaracteres } from "../../../components/interface/limiteDeCaracteres";

export default function Mensagem() {
  return (
		<div className='flex flex-col gap-2'>
			<label className='flex flex-col gap-3'>
				<span className='text-[14px] font-bold'>Mensagem Principal</span>
				<textarea
					name='message'
					placeholder='Bem-vindo ao Terminal de Pagamento'
					rows={3}
					maxLength={50}
					className='border border-gray-300 p-3 rounded-lg resize-none text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
			</label>

			<div className='flex justify-between'>
				<small className='text-[12px] text-gray-500'>34 caracteres</small>
				<small className='text-[12px] text-gray-500'>
					Máximo: 50 caracteres
				</small>
			</div>

			<LimiteDeCaracteres />
		</div>
	);
}