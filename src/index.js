import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const budyNode = document.querySelector('body');
const btnStartNode = document.querySelector('button[data-action="start"]');
const btnStopNode = document.querySelector('button[data-action="stop"]');
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBackgroundColor = colors => {
  const getRandomColorId = randomIntegerFromInterval(0, colors.length);
  budyNode.style.background = colors[getRandomColorId];
};

btnStartNode.addEventListener ('click', () => {
  btnStartNode.disabled = true;
  interval = setInterval(() => {
    console.log("aaaa");
    changeBackgroundColor(colors);
  }, 1000)
});

btnStopNode.addEventListener('click', () => {
  clearInterval(interval);
  btnStartNode.disabled = false;
});
