// Выведите чётные числа
// 			При помощи цикла for выведите чётные числа от 2 до 10.
// 			Для проверки на чётность используйте оператор получения остатка от деления % - if (i % 2 == 0)
let i; // ((объявил i тут, а не ниже перед while, потому что иначе у меня не работает — спрошу в чате))
for (i = 2; i <= 10; i++) {
	if (i % 2 == 0) console.log(i);
} // ((хз, я не ставлю точку с запятой тут и вижу, что во многих примерах ее тоже нет, даже в этом же задании))

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// 	console.log( `number ${i}!` );
// }
i = 0;
while (i < 3) {
	console.log(`number ${i}!`);
	i++;
}

// Перепишите код в двух синтаксисах (одну можно закомментировать) Function Expression и стрелочной функцией
// Сейчас в функцию ask передаются анонимные каллбек функции, дайте им имена и передавайте как каллбек через переменную описания.

// function ask(question, answer, yes, no) {
// 	question();
// 	if (answer) yes()
// 	else no();
// }

// ask(
// 	function() { console.log("Вы согласны?"); },
// 	true,
// 	function() { console.log("Вы согласились."); },
// 	function() { console.log("Вы отказались."); }
// );

const ask = function(question, answer, yes, no) {
	question();
	if (answer) yes()
	else no();
}

// стрелочный вариант
// const ask = (question, answer, yes, no) => {
// 	question();
// 	if (answer) yes()
// 	else no();
// }

const askConsole = () => console.log("Вы согласны?");
const yesConsole = () => console.log("Вы согласились.");
const noConsole = () => console.log("Вы отказались.");

ask(askConsole, true, yesConsole, noConsole);

// ask( // не додумался сам, что функцию в переменной можно вызывать так же, как и обычную декларативную функцию
// 	function() { console.log("Вы согласны?"); },
// 	true,
// 	function() { console.log("Вы согласились."); },
// 	function() { console.log("Вы отказались."); }
// );

