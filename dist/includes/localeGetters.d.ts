export declare const getLocaleFromHostname: (hostname: RegExp) => string | null;
export declare const getLocaleFromPathname: (pathname: RegExp) => string | null;
export declare const getLocaleFromNavigator: (ssrDefault?: string) => string | null;
export declare const getLocaleFromAcceptLanguageHeader: (header: string | null, availableLocales?: string[]) => string | undefined;
