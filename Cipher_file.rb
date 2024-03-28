def caesar_cipher(string, string_factor)
  encrypted_string = ''
  string.each_char do |char|
    if char.match(/[a-zA-Z]/)
      uppercase = (char == char.upcase)
      char = char.downcase
      shifted_char = ((char.ord - 'a'.ord + string_factor) % 26 + 'a'.ord).chr
      shifted_char = shifted_char.upcase if uppercase
      encrypted_string += shifted_char
    else
      encrypted_string += char
    end
  end
  return encrypted_string
end
