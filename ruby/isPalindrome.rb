def is_palindrome(x)
  # 1. Convert the integer to a string
  # 2. Reverse the string
  # 3. Compare the original string to the reversed string
  x.to_s == x.to_s.reverse
end

puts is_palindrome(12321) 
puts is_palindrome(12345) 