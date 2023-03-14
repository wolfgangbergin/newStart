'use strict';
({
  plugins: ['jsdom-quokka-plugin'],
});

const L = console.log;
globalThis.l = console.log;

let node1Func = function () {

   l = console.log

    l(this)
};

node1Func();
