function sayHello(name) {
  console.log(`Hello ${name}`);
}

function sayGoodbye(name) {
  console.log(`Goodbye ${name}`);
}

function printMessageWithParams(func, name) {
  console.log('Printing message...');
  func(name);
}

printMessageWithParams(sayHello, 'Bob 1');

printMessageWithParams( (name) => { console.log(`Hello ${name}!`); } , 'Alex' );

