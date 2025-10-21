console.log(100);

console.log('Hello World');
console.log(20, 'Hello', true);

const x = 100;

console.log(x);

console.group('simple');

console.error('Alert');
console.warn('Warning');
console.table({ name: 'Brad', email: 'brad@gmail.com' });
console.groupEnd();

const styles = 'padding:10px; background-color:orange;color:green';

console.log('%cHello World', styles);
