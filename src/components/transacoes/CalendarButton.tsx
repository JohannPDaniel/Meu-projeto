import { useMemo, useState } from 'react';
import {
	Calendar as CalendarIcon,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';

type DayCell = { date: Date; isCurrentMonth: boolean };

const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
const isSameDay = (a: Date | null, b: Date | null) =>
	!!a &&
	!!b &&
	a.getFullYear() === b.getFullYear() &&
	a.getMonth() === b.getMonth() &&
	a.getDate() === b.getDate();

export default function CalendarButton() {
	const today = new Date();
	const [open, setOpen] = useState(false);
	const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));
	const [selected, setSelected] = useState<Date | null>(today); // por padrão: hoje

	const cells = useMemo<DayCell[]>(() => {
		const first = startOfMonth(currentMonth);
		const startWeekday = first.getDay(); // 0=Domingo
		const daysInCurrent = new Date(
			currentMonth.getFullYear(),
			currentMonth.getMonth() + 1,
			0
		).getDate();
		const daysInPrev = new Date(
			currentMonth.getFullYear(),
			currentMonth.getMonth(),
			0
		).getDate();

		const out: DayCell[] = [];
		for (let i = startWeekday - 1; i >= 0; i--) {
			out.push({
				date: new Date(
					currentMonth.getFullYear(),
					currentMonth.getMonth() - 1,
					daysInPrev - i
				),
				isCurrentMonth: false,
			});
		}
		for (let d = 1; d <= daysInCurrent; d++) {
			out.push({
				date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d),
				isCurrentMonth: true,
			});
		}
		while (out.length < 42) {
			const diff = out.length - (startWeekday + daysInCurrent) + 1;
			out.push({
				date: new Date(
					currentMonth.getFullYear(),
					currentMonth.getMonth() + 1,
					diff
				),
				isCurrentMonth: false,
			});
		}
		return out;
	}, [currentMonth]);

	const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
	const monthLabel = currentMonth.toLocaleString('default', { month: 'long' });
	const year = currentMonth.getFullYear();

	const pick = (d: Date, isCurrentMonth: boolean) => {
		setSelected(d);
		if (!isCurrentMonth) setCurrentMonth(startOfMonth(d));
		// Se quiser fechar ao selecionar:
		// setOpen(false);
	};

	const go = (delta: number) =>
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1)
		);

	return (
		<div className='relative inline-block'>
			{/* Botão */}
			<button
				onClick={() => setOpen((v) => !v)}
				className='flex items-center gap-2 text-[14px] font-bold border border-gray-300 px-4 py-2 rounded-xl shadow-sm hover:bg-blue-100 hover:text-blue-900 bg-white cursor-pointer'>
				<CalendarIcon size={18} />
				<span>
					{selected
						? selected.toLocaleDateString('pt-BR', {
								day: '2-digit',
								month: '2-digit',
								year: 'numeric',
						  })
						: 'Data'}
				</span>
			</button>

			{/* Popover */}
			{open && (
				<div className='absolute right-3 mt-2 w-64 border border-gray-300 rounded-lg p-2 shadow bg-white z-10'>
					{/* Cabeçalho */}
					<div className='flex items-center justify-between mb-2'>
						<button
							onClick={() => go(-1)}
							className='p-1 rounded hover:bg-gray-100'>
							<ChevronLeft size={18} />
						</button>
						<span className='font-semibold capitalize'>
							{monthLabel} {year}
						</span>
						<button
							onClick={() => go(1)}
							className='p-1 rounded hover:bg-gray-100'>
							<ChevronRight size={18} />
						</button>
					</div>

					{/* Dias da semana */}
					<div className='grid grid-cols-7 text-center text-gray-500 text-sm'>
						{daysOfWeek.map((d) => (
							<div key={d}>{d}</div>
						))}
					</div>

					{/* Grade de dias */}
					<div className='grid grid-cols-7 text-center text-sm mt-1'>
						{cells.map(({ date, isCurrentMonth }, i) => {
							const isSelected = isSameDay(date, selected);
							const isToday = isSameDay(date, today);

							return (
								<button
									key={i}
									type='button'
									onClick={() => pick(date, isCurrentMonth)}
									className={[
										'p-2 rounded-full cursor-pointer transition',
										!isCurrentMonth ? 'text-gray-400' : 'text-gray-900',
										// prioridade: selecionado > hoje > default
										isSelected
											? 'bg-blue-800 text-white font-semibold'
											: isToday
											? 'ring-1 ring-blue-400/70 text-blue-700 font-semibold'
											: 'hover:bg-gray-100',
									].join(' ')}>
									{date.getDate()}
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
