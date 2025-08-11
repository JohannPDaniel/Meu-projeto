// app/clientes/page.tsx  (opcional: redirecionar para a aba padrão)
import { redirect } from 'next/navigation';
export default function Page() {
	redirect('/clientes/lista');
}
