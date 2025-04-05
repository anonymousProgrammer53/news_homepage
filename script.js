let getIconMenu = document.querySelector('img[alt="icon-menu"]');
getIconMenu.addEventListener('click', () => {
    let getNavList = document.querySelector('header')
        .querySelector('div').querySelector('nav').querySelector('ul');
    if (getNavList.classList.contains('d-none-768')) {
        getNavList.classList.replace('d-none-768', 'd-flex-768');
        console.log(getIconMenu.src = './icon-menu-close.svg');
    } else if (getNavList.classList.contains('d-flex-768')) {
        getNavList.classList.replace('d-flex-768', 'd-none-768');
        console.log(getIconMenu.src = './icon-menu.svg');
    }
});
