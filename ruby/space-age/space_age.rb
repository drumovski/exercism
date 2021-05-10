EARTH_YEAR_IN_SECONDS = 31557600.0
class SpaceAge
    def initialize(seconds)
        @years = seconds / EARTH_YEAR_IN_SECONDS
    end

    def on_earth
        return @years
    end
    
    def on_mercury
        return @years / 0.2408467
    end

    def on_venus
        return @years / 0.61519726
    end

    def on_mars
        return @years / 1.8808158
    end

    def on_jupiter
        return @years / 11.862615
    end

    def on_saturn
        return @years / 29.447498
    end

    def on_uranus
        return @years / 84.016846
    end

    def on_neptune
        return @years / 164.79132
    end
end
