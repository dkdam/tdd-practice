require_relative '../vowel_remover'

describe 'remove vowels' do
    it 'removes the vowels' do
        expect(shortcut('hello')).to eq('hll')
        expect(shortcut('codewars')).to eq('cdwrs')
        expect(shortcut('goodbye')).to eq('gdby')
        expect(shortcut('HELLO')).to eq('HELLO')
    end
end