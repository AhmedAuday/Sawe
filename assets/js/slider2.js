const slider = document.querySelector('.slider2');

function activate(e) {
    const items = document.querySelectorAll('.item2');
    e.target.matches('.nextt') && slider.append(items[0])
    e.target.matches('.prevv') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);