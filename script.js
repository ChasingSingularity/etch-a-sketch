const wrapper = document.querySelector('div.container');
let i = 1;
do {
    const div = document.createElement('div');
    const append = wrapper.append(div);
    i++
} while (i < 256)