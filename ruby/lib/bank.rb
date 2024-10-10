class Bank
    attr_reader :accounts

    def initialize(name)
        @name = name
        @accounts = {}
    end

    def create_account(name, balance)
        @accounts[name] = balance
    end
end