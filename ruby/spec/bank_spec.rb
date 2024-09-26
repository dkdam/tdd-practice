require_relative '../lib/bank'

describe Bank do
    let (:bank) { Bank.new( 'TDD Bank' ) }
    describe ".new" do
        it "Creates a new bank object" do
            expect( bank ).to_not eq nil
        end
    end

    describe "#create_account" do
        it "creates a new account for a user with a given starting balance" do
            bank.create_account 'Bob', 200
            expect(bank.accounts['Bob']).to eq 200
        end
    end
end