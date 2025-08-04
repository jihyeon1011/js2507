// 1. concat : "***고객님 안녕하십니까"

let userName = ['최','지','현','고객님'];
let chars = [' 안녕하십니까'];

let namechars = userName.concat(chars);
document.writeln(`1. concat : ***고객님 안녕하십니까<br>`);
document.writeln(`${namechars}<hr>`);

// 2. join : "*_*_*_고객님 안녕하십니까"

let string1 = userName.join('_');
document.writeln(`2. join : *_*_*_고객님 안녕하십니까<br>`);
document.writeln(`${string1}${chars}<hr>`)

// 3. push : "*_*_*_고객님 안녕하십니까!"

let ret1 = chars.push('!');
document.writeln(`3. push : *_*_*_고객님 안녕하십니까!<br>`);
document.writeln(`${string1}${chars}<hr>`);

// 4. unshift : "수원역지점 *_*_*_고객님 안녕하십니까!"

let ret2 = userName.unshift('수원역지점 ');
document.writeln(`4. unshift : 수원역지점 *_*_*_고객님 안녕하십니까!<br>`);
document.writeln(`${userName}${chars}<hr>`)

// 5. pop : "수원역지점 *_*_*_고객님 안녕하십니까"

let popped1 = chars.pop();
document.writeln(`5. pop : 수원역지점 *_*_*_고객님 안녕하십니까<br>`);
document.writeln(`${userName}${chars}<hr>`)

// 6. shift : " *_*_*_고객님 안녕하십니까"

let popped2 =  userName.shift();
document.writeln(`6. shift : *_*_*_고객님 안녕하십니까<br>`);
document.writeln(`${userName}${chars}<hr>`)

// 7. splice : " *_*_*_고객님 오늘도 좋은하루 안녕하십니까"

let goodday = chars.splice(0,0,'오늘도 좋은하루');
document.writeln(`7. splice : *_*_*_고객님 오늘도 좋은하루 안녕하십니까<br>`);
document.writeln(`${userName} ${chars}<hr>`);

// 8. slice : " *_*_*_" (밑줄도 가능하면 빼고)

let customer = userName.slice(0,3);
document.writeln(`8. slice : *_*_*_<br>`);
document.writeln(`${customer}`);