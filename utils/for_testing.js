const palindrome = (string) => {

   if(typeof string == 'undefined') return

   return string
     .split('')
     .reverse()
     .join('')
}

const average = array => {
    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

const caracteres = (string) => {
    if(typeof string =='undefined') return

    return string+string
}

const prohibido = (string) => {
    if(typeof string =='undefined') return

    return string
}

module.exports = {
    palindrome,
    average,
    caracteres,
    prohibido
}