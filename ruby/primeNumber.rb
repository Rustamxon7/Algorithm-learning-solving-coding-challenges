def count_how_many_are_prime(array)
  total = 0 

  for item in array
    next if item == 1

    is_prime = true
    number = item - 1
    while number > 1
      if item % number == 0
        is_prime = false
        break
      else 
        number = number - 1
      end
    end

    if is_prime == true
      total = total + 1
    end
  end
  puts total
  return total
end

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

puts count_how_many_are_prime(array)