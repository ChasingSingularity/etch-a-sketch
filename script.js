const container = document.querySelector('.container');

let i = 0;
while (i < 256) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid')
    container.append(div);
    i++;
};

const grid = document.querySelectorAll('.grid');
grid.forEach((e) => {
    e.addEventListener('mouseenter',
        () => { e.classList.add('color') })
})