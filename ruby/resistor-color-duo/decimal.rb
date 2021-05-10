# function binary(number)

#   loop until number < 2

#     remainder = number % 2

#     number = number / 2

#     answer = answer with remainder inserted as first digit

#   end loop

#   answer = answer with number inserted as first digit

# return answer

# end function


def binary(num)
    ans = ""
    while num<2
        remainder = num%2
        num = num / 2
        ans = ans.insert(0,remainder.to_s)
    end
    ans = ans.insert(0, num.to_s)
end
binary (100)