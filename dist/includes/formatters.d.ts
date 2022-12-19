import { MemoizedIntlFormatter } from "../types/index";
export declare const setCustomNumberFormat: (f: Record<string, Intl.NumberFormatOptions>) => void;
export declare const setCustomDateFormat: (f: Record<string, Intl.DateTimeFormatOptions>) => void;
export declare const setCustomTimeFormat: (f: Record<string, Intl.DateTimeFormatOptions>) => void;
export declare const getNumberFormatter: MemoizedIntlFormatter<Intl.NumberFormat, Intl.NumberFormatOptions>;
export declare const getDateFormatter: MemoizedIntlFormatter<Intl.DateTimeFormat, Intl.DateTimeFormatOptions>;
export declare const getTimeFormatter: MemoizedIntlFormatter<Intl.DateTimeFormat, Intl.DateTimeFormatOptions>;
