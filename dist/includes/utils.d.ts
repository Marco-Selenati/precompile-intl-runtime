interface Options {
    fallbackLocale: string;
    initialLocale: string;
    loadingDelay: number;
}
export declare function getCurrentLocale(): string;
export declare function setCurrentLocale(val: string): string;
export declare function getOptions(): Options;
export declare function getPossibleLocales(refLocale: string, fallbackLocale?: string): string[];
export {};
