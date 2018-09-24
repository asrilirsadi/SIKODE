// console.log(`----Review Fundamental----`)

// console.log(`\nSoal 1`)
// var arr = [3,5,2,8,1,0,7]
// console.log(`array awal : [${arr}]`);

// var arr_reverse = [];

// for(var i=arr.length-1; i>=0; i--)
// {
//     arr_reverse.push(arr[i]);
// }
// console.log(`setelah di reverse : [${arr_reverse}]`);


// console.log(`\nSoal 2`);
// var str = 'ASRIL IRSADI';
// var str_LowCase = str.toLowerCase();
// var str_new = '';

// console.log(str.toLowererCase());

// for(var i=0; i<str_LowCase.length; i++)
// {
//     if(i == 0)
//     {
//         var x = str_LowCase[i].toUpperCase();
//         str_new+=x;
//     }
//     else if (str_LowCase[i] == ' ')
//     {   
//         var y = str_LowCase[i+1].toUpperCase();
//         str_new+=str_LowCase[i]+y;
//         i++;
//     }
//     else
//     {
//         str_new+=str_LowCase[i];
//     }
// }
// console.log(str_new);


// console.log(`\nSoal 3`);
// var array_utama = [[10,6,5,8],[4,7,8,2],[1,2,4,7],[11,13,14,15]]
// var arr_hasil = [];

// for(var i=0; i<array_utama.length; i++)
// {
//     // var max = Math.max.apply(Math, array_utama[i]);
//     // arr_hasil.push(max);
//     arr_hasil.push(Math.max.apply(Math, array_utama[i]))
// }

// console.log(arr_hasil)


// console.log(`\nSoal 4`);

// const fungsi = (x,n) =>
// {
//     var i = 0;
//     var y = '';
//     while(i<n)
//     {
//         y+=x;
//         y+= ' ';
//         i++
//     }
//     return y;
// }

// console.log(fungsi('asril',3));

// var fizzBuzz = function(n) 
// {
//     var result = [];   
//     for(var i=1; i<=n; i++)
//     {
//         if((i%3 == 0) && i%5 == 0)
//         {
//             result.push("FizzBuzz")
//         }
//         else if(i%3 == 0)
//         {
//             result.push("Fizz")
//         }
//         else if(i% 5 == 0)
//         {
//             result.push("Buzz")
//         }
//         else
//             result.push(i)   
//     }
//     return result;
// };
// console.log(fizzBuzz(15));

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
var str = 'pii';

var firstUniqChar = function(s) 
{
    var result = -1
    for(var i=0; i<s.length; i++)
    {
        var count = 0;
        for(var j=0; j<s.length; j++)
        {
            if(s[i] === s[j])
            {
                count+=1;             
            }
        }
        if(count<2)
        {
            result = i;
            break;
        }
    }    
    return result;
};
console.log(firstUniqChar(str));