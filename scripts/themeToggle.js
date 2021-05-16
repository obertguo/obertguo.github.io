const themeToggle = () =>{
    const checkBox = document.getElementById('themeToggleCheckBox');
    const desc = document.getElementById('themeToggleDescription');

    let currentTheme = "";

    if(checkBox.checked) currentTheme = "dark";
    else currentTheme = "light";
    
    desc.innerHTML = "Current theme: " + currentTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

const applyTheme = () =>{
    const checkBox = document.getElementById('themeToggleCheckBox');
    const desc = document.getElementById('themeToggleDescription');
    
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

    if(currentTheme == 'dark') checkBox.checked = true;
    else checkBox.checked = false;

    desc.innerHTML = "Current theme: " + currentTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
}