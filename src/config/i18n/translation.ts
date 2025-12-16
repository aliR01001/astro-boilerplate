import type { Language } from "../type";

const globalLanguages: Language[] = [...new Set(["fr", "en"])] as Language[];

function normalizePath(path: string, currentLang: Language): string {
    if (!path) return currentLang === "fr" ? "/fr/" : "/";
    if (path === '/') return path;
    return path.endsWith('/') ? path.slice(0, -1) : path;
}

const pages = [
    { fr: '/fr/', en: '/' }
]

export function selectLanguage (currentLang: Language, currentPath: string){
    currentPath = normalizePath(currentPath, currentLang);
    const currentLangItem = pages.find(item => item[currentLang] === currentPath);
    if(!currentLangItem){
        return {
            currentLangLabel: currentLang,
            switchTo: [{language : currentLang === "fr" ? "en" : "fr", href: currentLang === "fr" ? "/" : "/fr/"}]
        }
    }
    
    else{
        let otherLangs = globalLanguages.filter(lang => lang !== currentLang);
        const otherLangItem = otherLangs.map(item =>{ return{language:item, href: currentLangItem?.[item as Language] + "/" };});
        return {
            currentLangLabel: currentLang,
            switchTo: otherLangItem
        }
    }
}