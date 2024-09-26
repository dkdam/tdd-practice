require_relative '../lib/fizz_buzz.rb'

RSpec.describe FizzBuzz do
    let(:fizzbuzz) { FizzBuzz.new }

    describe 'divide' do
        it 'returns an array of numbers including "Fizz", "Buzz" & "FizzBuzz"' do
            expect(FizzBuzz.count(15)).to eq([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'])
        end

        context 'When dividing by 3' do
            it 'returns "Fizz" from division of 3' do
                expect(FizzBuzz.count(3)[2]).to eq('Fizz')
                expect(FizzBuzz.count(6)[5]).to eq('Fizz')
                expect(FizzBuzz.count(9)[8]).to eq('Fizz')
            end
        end

        context 'When dividing by 5' do
            it 'returns "Buzz" from division of 5' do
                expect(FizzBuzz.count(5)[4]).to eq('Buzz')
                expect(FizzBuzz.count(10)[9]).to eq('Buzz')
                expect(FizzBuzz.count(20)[19]).to eq('Buzz')
            end
        end

        context 'When dividing by 15' do
            it 'returns "FizzBuzz" from division of 15' do
                expect(FizzBuzz.count(15)[14]).to eq('FizzBuzz')
                expect(FizzBuzz.count(30)[29]).to eq('FizzBuzz')
            end
        end

        context 'When not dividing by 3. 5, or 15' do
            it 'returns a number in the array' do
                expect(FizzBuzz.count(7)[6]).to eq(7)
                expect(FizzBuzz.count(11)[10]).to eq(11)
                expect(FizzBuzz.count(13)[12]).to eq(13)
            end
        end
    end
end