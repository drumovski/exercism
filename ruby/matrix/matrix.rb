class Matrix

  def initialize(matrix)
    @matrix = matrix
  end

  def rows
    rows = @matrix.split("\n").map { |x| x.split.map(&:to_i) }
  end

  def columns
    columns = rows.transpose
  end
  
end