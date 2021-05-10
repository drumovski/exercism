# frozen_string_literal: true

class ArmstrongNumbers
  def self.include?(num)
    arr = num.to_s.chars
    total = arr.reduce(0) { |sum, digit| sum + digit.to_i**arr.length }
    total == num
  end
end
