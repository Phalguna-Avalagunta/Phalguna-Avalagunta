document.querySelector('form').onsubmit = function() {
    window.open('mailto:example@example.com?subject=Subject&body=Body');
};
