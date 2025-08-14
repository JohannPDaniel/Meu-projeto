'use client';

import {
	createContext,
	useContext,
	useMemo,
	useState,
	type ReactNode,
} from 'react';

type Ctx = {
	message: string;
	setMessage: (s: string) => void;
	limit: number;
	setLimit: (n: number) => void;
	count: number;
};

const InterfaceConfigContext = createContext<Ctx | null>(null);

export function InterfaceConfigProvider({ children }: { children: ReactNode }) {
	const [limit, _setLimit] = useState(40);
	const [message, _setMessage] = useState('');

	const setMessage = (s: string) => _setMessage(s.slice(0, limit));
	const setLimit = (n: number) => {
		_setLimit(n);
		_setMessage((prev) => (prev.length > n ? prev.slice(0, n) : prev));
	};

	const count = useMemo(() => message.length, [message]);

	return (
		<InterfaceConfigContext.Provider
			value={{ message, setMessage, limit, setLimit, count }}>
			{children}
		</InterfaceConfigContext.Provider>
	);
}

export function useInterfaceConfig() {
	const ctx = useContext(InterfaceConfigContext);
	if (!ctx)
		throw new Error(
			'useInterfaceConfig must be used within InterfaceConfigProvider'
		);
	return ctx;
}
