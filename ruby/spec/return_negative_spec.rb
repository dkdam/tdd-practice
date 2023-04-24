require_relative '../return_negative'

describe '#make_negative' do
    it 'returns a negative number when given a positive number' do
        expect(make_negative(5)).to eq(-5)
    end

    it 'returns a negative number when given a negative number' do
        expect(make_negative(-8)).to eq(-8)
    end

    it 'returns zero when given zero' do
        expect(make_negative(0)).to eq(0)
    end
end