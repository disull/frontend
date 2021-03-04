function printNumbers(number)
{
    for(var i = 0; i<=number; i++){

        switch(i){
            case 5:
                console.log('Пять');
                break;
            case 13:
                console.log('Тринадцать');
                break;
            case 22:
                console.log('Двадцать два');
                break;
            case 35:
                console.log('Тридцать пять');
                break;
            case 98:
                console.log('Девяносто Восемь');
                break;
            default:
                console.log(i);
                break;
        }
    }
}

printNumbers(100);
