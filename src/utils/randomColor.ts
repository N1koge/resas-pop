const COLOR_LENGTH = 12;

const vividColors = [
  '#B5184F',
  '#DD3737',
  '#E66D00',
  '#EEAC00',
  '#C8BB00',
  '#4AA315',
  '#008C69',
  '#007C8C',
  '#005A91',
  '#00509D',
  '#663E8C',
  '#892C71',
];

const randomColor = (): string =>
  vividColors[Math.floor(Math.random() * COLOR_LENGTH)];

export { randomColor };
