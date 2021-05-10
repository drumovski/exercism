# frozen_string_literal: true

class ResistorColorDuo
  COLORS = %w[black brown red orange yellow green blue violet grey white].freeze
  def self.value(color_arr)
    (color_arr.first(2).map { |color| COLORS.index color }).join.to_i
  end
end
