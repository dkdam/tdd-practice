require_relative '../average_no'

describe 'above average score' do

    it "should return true if the points are above the average score" do
        expect(better_than_average([2, 3], 5)).to eq(true)
        expect(better_than_average([-2, 8, -1, 6, 0, -3], 5)).to eq(true)
        expect(better_than_average([0, 0, 0, 0, 0], 5)).to eq(true)
        expect(better_than_average([-5, -15, -25, -35, -45], -5)).to eq(true)
        expect(better_than_average([50, 100, 200, 300, 400], 250)).to eq(true)
    end

    it "should return false if the points are not above the average score" do
        expect(better_than_average([3, 4, 5, 6, 7, 8, 9, 10, 11], 6)).to eq(false)
        expect(better_than_average([20, 30, 40, 40, 50, 60], 30)).to eq(false)
    end

end
