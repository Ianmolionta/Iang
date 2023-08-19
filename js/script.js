const togglemenu = () => {
    const burgermenu = document.querySelector(".menu-btn");
    const src = burgermenu.getAttribute('src');
    const iconname = src === 'assets/burger-menu.svg' ?
        'assets/close.svg'
        :
        'assets/burger-menu.svg';

    burgermenu.setAttribute(
        'src',
        iconname
    );
    const navigation = document.querySelector('.menu-nav');

    navigation.classList.toggle(
        'menu-nav--mobile'
    );
}