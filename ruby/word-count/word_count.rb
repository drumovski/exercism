# frozen_string_literal: true

class Phrase
  def initialize(phrase)
    @phrase = phrase.downcase
  end

  def word_count
    # arr = @phrase.split(/\s+|[,+]/)
    # hash = {}
    # arr.each do |k|
    #   k.gsub!(/\A\W+|\W+\Z/, '')
    #   if k != ''
    #     hash.key?(k) ? hash[k] += 1 : hash[k] = 1
    #   end
    # end
    # hash

    
    # @phrase.gsub!(/\A\W+|\W+\Z/, '')
    @phrase.gsub(/\W+/, '')

    puts " stripped arr is #{@phrase}"
    arr1 = @phrase.split(/\s+|[,+]/)
    arr = @phrase.split(/\b[^\w']+\b/)
    puts " arr is #{arr}"
    puts " arr1 is #{arr1}"
  end
end

puts Phrase.new("car: carpet as java: javascript!!&@$%^&").word_count
puts Phrase.new("testing, 1, 2 testing").word_count
puts Phrase.new("go Go GO Stop stop").word_count
puts Phrase.new("First: don't laugh. Then: don't cry.").word_count
puts Phrase.new("Joe can't tell between 'large' and large.").word_count
puts Phrase.new("multiple   whitespaces").word_count