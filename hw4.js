"use strict";

//Task 1
{
    // let arr = [1, 2, 3, 4, 5];
    // for (let i = 0; i < arr.length; i++)
    // {
    //     console.log(arr[i]);
    // }
}

//Task 2
{
    // let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    // for (let i = 0; i < arr.length; i++)
    // {
    //     if (arr[i] > -10 && arr[i] < -3)
    //     {
    //         console.log(arr[i]);
    //     }
    // }
}

//Task 3
{
    // let arr = [];
    // for (let i = 23; i <= 57; i++)
    // {
    //     arr.push(i);
    // }
    // console.log(`массив for: `, arr);

    // let arr2 = [];
    // let num = 23;
    // while (num <= 57)
    // {
    //     arr2.push(num);
    //     num++;
    // }
    // console.log(`массив while: `, arr2);

    // let result = 0;
    // for (let i = 0; i < arr.length; i++)
    // {
    //     result += arr[i];
    // }
    // console.log(`сумма =`, result);
}

//Task 4
{
    // let arr = ['10', '20', '30', '50', '235', '3000'];
    // for (let i = 0; i < arr.length; i++)
    // {
    //     let first = arr[i][0];

    //     if (first === '1' || first === '2' || first === '5')
    //     {
    //         console.log(arr[i]);
    //     }
    // }
}

//Task 6
{
    //    let arr = [true, 'ten', 5, 15, false];
    //    arr.push('new');

    //    let last = arr[arr.length - 1];
    //    console.log('массив: ', arr);
    //    console.log('последний элемент: ', last);
}

//Task 7
{
    // let arr = [];

    // while (true) {
    //     let user = prompt('Введите числовое значение (для завершения введите пустую строку):');

    //     if (user === '' || user === null) {
    //         break;
    //     }

    //     let number = parseFloat(user);

    //     if (!isNaN(number)) {
    //         arr.push(number);
    //     } else {
    //         alert('Ошибка ввода. Введите число.');
    //     }
    // }

    // console.log('Исходный массив:', arr);

    // arr.sort((a, b) => a - b);
    // console.log('Отсортированный массив:', arr);
}

//Task 8
{
    // let arr = [12, false, 'Текст', 4, 2, -5, 0];
    // let reversed = [];
    // let i = arr.length - 1;

    // while (i >= 0) 
    // {
    //     reversed.push(arr[i]);
    //     i--;
    // }
    // console.log('Исходный массив:', arr);

    // console.log('Перевернутый массив while:', reversed);

    // let arr2 = [12, false, 'Текст', 4, 2, -5, 0];
    // let reversed2 = arr2.slice().reverse();

    // console.log('Перевернутый массив reverse:', reversed2);
}

//Task 9
{
    // let arr = [5, 9, 21, , , 9, 78, , , , 6];
    // let ecounter = 0;

    // for (let i = 0; i < arr.length; i++) 
    // {
    //     if (arr[i] === undefined) 
    //     {
    //         ecounter++;
    //     }
    // }

    // console.log('Массив:', arr);
    // console.log('Количество пустых элементов в массиве:', ecounter);
}

//Task 10
{
    // let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];

    // let first = -1;
    // let last = -1;

    // for (let i = 0; i < arr.length; i++) 
    // {
    //     if (arr[i] === 0) 
    //     {
    //         if (first === -1) 
    //         {
    //             first = i;
    //         }
    //         last = i;
    //     }
    // }

    // let sum = 0;
    // if (first !== -1 && last !== -1 && first !== last) 
    // {
    //     for (let i = first + 1; i < last; i++) 
    //     {
    //         sum += arr[i];
    //     }
    // }

    // console.log('Сумма:', sum);
}

//Task 11
{
    let height = prompt("Введите высоту треугольника:");
    height = parseInt(height);

    if (!isNaN(height) && height > 0) 
    {
        for (let i = 1; i <= height; i++) 
        {
            let space = '';
            let sim = '';

            for (let j = 0; j < height - i; j++) 
            {
                space += ' ';
            }

            for (let k = 0; k < 2 * i - 1; k++) 
            {
                sim += '^';
            }
            console.log(space + sim);
        }
    } 
    else 
    {
        console.log("Пожалуйста, введите положительное число для высоты треугольника.");
    }

}