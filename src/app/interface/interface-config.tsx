/* eslint-disable @typescript-eslint/no-unused-vars */
// components/interface/interface-config.tsx
'use client';

import {
	createContext,
	useContext,
	useMemo,
	useState,
	type ReactNode,
} from 'react';

const FONT_FACE = {
	arial: 'Arial',
	helvetica: 'Helvetica',
	roboto: 'Roboto',
	'open sans': 'Open Sans',
} as const;

const SIZE_MAP = {
	pequeno: 14,
	medio: 16,
	grande: 20,
	extraGrande: 24,
} as const;

export type FontKey = keyof typeof FONT_FACE;
export type SizeKey = keyof typeof SIZE_MAP;

type Ctx = {
	// mensagem/limite (como antes)
	message: string;
	setMessage: (s: string) => void;
	limit: number;
	setLimit: (n: number) => void;
	count: number;

	// estilo
	fontKey: FontKey;
	setFontKey: (k: FontKey) => void;
	fontFamily: string; // derivado de fontKey
	sizeKey: SizeKey;
	setSizeKey: (k: SizeKey) => void;
	fontSizePx: number;
	setFontSizePx: (n: number) => void;
	color: string;
	setColor: (hex: string) => void;
};

const InterfaceConfigContext = createContext<Ctx | null>(null);

export function InterfaceConfigProvider({ children }: { children: ReactNode }) {
	// mensagem
	const [limit, _setLimit] = useState(40);
	const [message, _setMessage] = useState('');
	const setMessage = (s: string) => _setMessage(s.slice(0, limit));
	const setLimit = (n: number) => {
		_setLimit(n);
		_setMessage((prev) => (prev.length > n ? prev.slice(0, n) : prev));
	};
	const count = useMemo(() => message.length, [message]);

	// estilo
	const [fontKey, setFontKey] = useState<FontKey>('arial');
	const [sizeKey, setSizeKey] = useState<SizeKey>('medio');
	const [fontSizePx, setFontSizePx] = useState<number>(16);
	const [color, setColor] = useState<string>('#1E40AF');

	const fontFamily = useMemo(() => FONT_FACE[fontKey], [fontKey]);

	return (
		<InterfaceConfigContext.Provider
			value={{
				message,
				setMessage,
				limit,
				setLimit,
				count,
				fontKey,
				setFontKey,
				fontFamily,
				sizeKey,
				setSizeKey,
				fontSizePx,
				setFontSizePx,
				color,
				setColor,
			}}>
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
