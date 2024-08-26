export function initialLocalStorage() {
    localStorage.getItem('isNavPanelShow') ?? localStorage.setItem('isNavPanelShow', JSON.stringify(true));
    localStorage.getItem('isTitlesShow') ?? localStorage.setItem('isTitlesShow', JSON.stringify(true));
    localStorage.getItem('bgColor') ?? localStorage.setItem('bgColor', 'bg-light');
    localStorage.getItem('textColor') ?? localStorage.setItem('textColor', 'text-dark');
    localStorage.getItem('fontFamily') ?? localStorage.setItem('fontFamily', 'Raleway');
    localStorage.getItem('fontSize') ?? localStorage.setItem('fontSize', JSON.stringify(1.2));
    localStorage.getItem('lineHeight') ?? localStorage.setItem('lineHeight', JSON.stringify(1.25));
    localStorage.getItem('articleInterval') ?? localStorage.setItem('articleInterval', JSON.stringify(0.75));
}

export let isNavPanelShow = () => localStorage.getItem('isNavPanelShow');
export let isTitlesShow = () => localStorage.getItem('isTitlesShow');
export let bgColor = () => localStorage.getItem('bgColor');
export let textColor = () => localStorage.getItem('textColor');
export let fontFamily = () => localStorage.getItem('fontFamily');
export let fontSize = () => Number(localStorage.getItem('fontSize'));
export let lineHeight = () => Number(localStorage.getItem('lineHeight'));
export let articleInterval = () => Number(localStorage.getItem('articleInterval'));

export let setIsNavPanelShow = (v: Boolean) => localStorage.setItem('isNavPanelShow', JSON.stringify(v));
export let setIsTitlesShow = (v: Boolean) => localStorage.setItem('isTitlesShow', JSON.stringify(v));
export let setBgColor = (v: String) => localStorage.setItem('bgColor', JSON.stringify(v));
export let setTextColor = (v: String) => localStorage.setItem('textColor', JSON.stringify(v));
export let setFontFamily = (v: String) => localStorage.setItem('fontFamily', JSON.stringify(v));
export let setFontSize = (v: Number) => localStorage.setItem('fontSize', JSON.stringify(v));
export let setLineHeight = (v: Number) => localStorage.setItem('lineHeight', JSON.stringify(v));
export let setArticleInterval = (v: Number) => localStorage.setItem('articleInterval', JSON.stringify(v));