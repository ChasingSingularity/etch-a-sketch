const wrapper = document.querySelector('div.container');
let i=1;
while (i < 256) {
    const div = document.createElement('div');
    wrapper.append(div);
    i++;
}