#declare function
def caesar_cipher(string, string_factor)

  #initialize variable
  encrypted_string = ''

  #loop that checks for every letter in the string
  string.each_char do |char|

    #if its a letter
    if char.match(/[a-zA-Z]/)

      #set conditional to check for uppercase later
      uppercase = (char == char.upcase)

      #set all letters to lowercase
      char = char.downcase
      
      #shift
      shifted_char = ((char.ord - 'a'.ord + string_factor) % 26 + 'a'.ord).chr
      
      #return  to uppercase if previous condition is met
      shifted_char = shifted_char.upcase if uppercase

      #one by one add each letter to the string
      encrypted_string += shifted_char
    else
      #if its not a letter then itll go right back in its spot
      encrypted_string += char
    end
  end
  #return the final string
  return encrypted_string
end
