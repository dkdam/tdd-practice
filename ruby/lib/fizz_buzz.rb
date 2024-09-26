class FizzBuzz

    def self.count(num)
        (1..num).map do |n|
            n % 3 == 0 && n % 5 == 0 ? 'FizzBuzz' :
            n % 5 == 0 ? 'Buzz' : 
            n % 3 == 0 ? 'Fizz' : 
            n
        end
    end

end