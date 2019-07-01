
const begin = {
  s: {
    bottom: 3,
    left: 5.7
  },
  r: {
    bottom: 8.5,
    left:4,
    peak: 80
  }
};


const sDefaults = {
  bottom: begin.s.bottom,
  left:begin.s.left,
  width: 6,
  height:9,
  retreating: false,
  pushForce: 1.6,
  retreatSpeed: 2.6
};

const rDefaults = {
  bottom: begin.r.bottom,
  left:begin.r.left,
  width: 17,
  height: 17,
  marginLeft: -3.6,
  peak: 74,
  rollbacks: 0
};