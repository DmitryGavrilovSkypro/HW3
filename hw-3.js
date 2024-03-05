


// example1//
let password = 'пароль';
let enterPassword = prompt('«Введите пароль»');
if (enterPassword === password) 
{alert ('"Пароль введен верно"');
} else {
 alert ('"Пароль введен неправильно"'); 
}

// example2//
let c = '5'
if (c > '0' && c < '10') {
alert('«Верно»')    
} else {
alert ('«Неверно»')    
}

// example3//
let d = 7
let e = 370
if (d > 100 || e > 100) {
alert ('«Верно»')   
} else {
alert ('«Неверно»')    
}

// example4//
let a = Number('2');
let b = Number('3');
alert(a + b);

// example5//
let month = prompt('Введите месяц в году');

switch (month) {
    case 'декабрь':
        alert('Зима')        
        break;
    case 'январь':
        alert('Зима')        
        break;
    case 'февраль':
        alert('Зима')        
        break;
    case 'март':
        alert('Весна')        
        break;
    case 'апрель':
        alert('Весна')        
        break;
    case 'май':
        alert('Весна')        
        break;
    case 'июнь':
        alert('Лето')        
        break;
    case 'июль':
        alert('Лето')       
        break;
    case 'август':
        alert('Лето')       
        break;
    case 'сентябрь':
        alert('Осень')       
        break;
    case 'октябрь':
        alert('Осень')       
        break;
    case 'ноябрь':
        alert('Осень')       
        break;
    default: alert('Где такой месяц нашли?')
        break;
}

 

