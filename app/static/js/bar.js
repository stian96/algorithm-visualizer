const container = document.querySelector('.sorting-visualization');
const data = [34, 56, 12, 89, 43];

data.forEach((number, index) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${number}px`;
    bar.style.left = `${index * 12}px`;
    container.appendChild(bar);
});