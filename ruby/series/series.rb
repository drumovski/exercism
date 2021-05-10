# frozen_string_literal: true

# Write your code for the 'Series' exercise in this file. Make the tests in
# `series_test.rb` pass.
#
# To get started with TDD, see the `README.md` file in your
# `ruby/series` directory.

class Series

  def initialize(string)
    @string = string
  end

  def slices(num)
    if num > @string.length
      raise ArgumentError, 'Length of parameter cannot be higher than string length'
      end

    arr = []
    (@string.length - num + 1).times do |i|
      arr.push(@string[i, num])
    end
    arr
  end
end
