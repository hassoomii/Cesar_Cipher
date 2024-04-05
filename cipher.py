def caesar_cipher(string, factor):
    new_string = ''
    if isinstance(string, str) and isinstance(factor, int):
        for char in string:
            if char.isalpha():
                if char.islower():
                    new_char = chr(((ord(char) - ord('a') + factor) % 26) + ord('a'))
                else:
                    new_char = chr(((ord(char) - ord('A') + factor) % 26) + ord('A'))
            else:
                new_char = char
            new_string += new_char
        print('Your new string is:', new_string)
    else:
        print('The wrong value types were put in, try the function again.')


caesar_cipher('ORangE blue', 11)
