# frozen_string_literal: true

class Pangram
  def self.pangram?(sentence)
    sentence.downcase!
    letters = ('a'..'z').to_a
    letters.each do |char|
      return false unless sentence.include?(char)
    end
    true
  end
end
