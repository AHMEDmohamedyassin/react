// import sayHello from "./cls.mjs";
import {sayHello , sayGoodBye , say, ServerName} from "./03-exportANDimport.mjs";
import {Car} from "./04-classes.mjs";

console.log('###############export and import part#############')

sayHello('say hello function ');
sayGoodBye('say goodbye function ');
say('say  function ');
say(ServerName);

console.log('################classes part######################')

let carCls = new Car('blue');
carCls.printColor();
carCls.redColor();


