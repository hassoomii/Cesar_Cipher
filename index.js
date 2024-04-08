// declare function
function caesarCipher(string, factor){
    
    // init new string variable
    let newString = '';

    // loop that checks each character (declare char variable too)
    for (let char of string) {

        // checks if its a letter
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.includes(char)){

            // extract code order
            codePoint = char.charCodeAt(0)

            // shifts code order
            newCodePoint = codePoint + factor

            // resets if it goes above letter order
            if (newCodePoint > 122){
                newCodePoint -= 26
            }

            // creates new char and adds it to empty variable
            let shiftedChar = String.fromCharCode(newCodePoint)
            newString += shiftedChar
        } else{

            // adds non letter variable to string
            newString += char
        }
    }
    return newString
}
console.log(caesarCipher('Caesar Cipher', 1))
