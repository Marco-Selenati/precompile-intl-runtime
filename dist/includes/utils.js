const defaultOptions = {
    fallbackLocale: "",
    initialLocale: "",
    loadingDelay: 200,
};
const options = defaultOptions;
let currentLocale;
export function getCurrentLocale() {
    return currentLocale;
}
export function setCurrentLocale(val) {
    return (currentLocale = val);
}
export function getOptions() {
    return options;
}
function getSubLocales(refLocale) {
    return refLocale
        .split("-")
        .map((_, i, arr) => arr.slice(0, i + 1).join("-"))
        .reverse();
}
export function getPossibleLocales(refLocale, fallbackLocale = getOptions().fallbackLocale) {
    const locales = getSubLocales(refLocale);
    if (fallbackLocale) {
        return [...new Set([...locales, ...getSubLocales(fallbackLocale)])];
    }
    return locales;
}
