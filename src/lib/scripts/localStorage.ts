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
