interface Formats {
    number: Record<string, Intl.NumberFormatOptions>;
    date: Record<string, Intl.DateTimeFormatOptions>;
    time: Record<string, Intl.DateTimeFormatOptions>;
}

export interface DeepDictionary {
  [key: string]: DeepDictionary | string | string[]
}
export type LocaleDictionaryValue = string | ((...args: any[]) => string)
export type LocaleDictionary = Record<string, LocaleDictionaryValue>;
export type Dictionary = Record<string, LocaleDictionary>

export interface MessageObject {
  id: string
  locale?: string
  format?: string
  default?: string
  values?: Record<string, string | number | Date>
}

export type JsonGetter = (
  id: string,
  locale?: string
) => any

export type MessageFormatter = (
  id: string | MessageObject,
  options?: MessageObject
) => string

export type TimeFormatter = (
  d: Date | number,
  options?: IntlFormatterOptions<Intl.DateTimeFormatOptions>
) => string

export type DateFormatter = (
  d: Date | number,
  options?: IntlFormatterOptions<Intl.DateTimeFormatOptions>
) => string

export type NumberFormatter = (
  d: number,
  options?: IntlFormatterOptions<Intl.NumberFormatOptions>
) => string

type IntlFormatterOptions<T> = T & {
  format?: string
  locale?: string
}

export interface MemoizedIntlFormatter<T, U> {
  (options?: IntlFormatterOptions<U>): T
}

export interface MessagesLoader {
  (): Promise<any>
}
export interface GetClientLocaleOptions {
  navigator?: boolean;
  hash?: string;
  search?: string;
  pathname?: RegExp;
  hostname?: RegExp;
}

export interface ConfigureOptions {
  fallbackLocale: string
  initialLocale?: string
  formats?: Partial<Formats>
  loadingDelay?: number
}
