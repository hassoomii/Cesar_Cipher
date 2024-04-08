function caesarCipher(string, factor){
    let newString = '';
    for (let char of string) {
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.includes(char)){
            codePoint = char.charCodeAt(0)
            newCodePoint = codePoint + factor
            if (newCodePoint > 122){
                newCodePoint -= 26
            }
            let shiftedChar = String.fromCharCode(newCodePoint)
            newString += shiftedChar
        } else{
            newString += char
        }
    }
    return newString
}
console.log(caesarCipher('Caesar Cipher', 1))
