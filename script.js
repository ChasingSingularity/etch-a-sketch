const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
btn.addEventListener("click", () => gridSquares())

function gridSquares(noOfSquares) {
    noOfSquares = prompt('No. of Squares',);
    generateGrid(noOfSquares);
    document.documentElement.style.setProperty('--repeat', `${noOfSquares}`)
}
function generateGrid(noOfSquares) {
    noOfSquares *= noOfSquares;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let i = 0;
    while (i < noOfSquares) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid')
        container.append(div);
        i++;
    };
    addEventListener();
}

function addEventListener() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((e) => {
        e.addEventListener('mouseenter',
            () => { e.classList.add('color') })
    })
}