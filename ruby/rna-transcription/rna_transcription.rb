# frozen_string_literal: true

class Complement
  def self.of_dna(sample)
    rna = ''
    sample.each_char do |letter|
      case letter
      when 'G'
        rna += 'C'
      when 'C'
        rna += 'G'
      when 'T'
        rna += 'A'
      when 'A'
        rna += 'U'
      else
        puts 'unexpected DNA sequence'
       end
    end
    rna
  end
end
