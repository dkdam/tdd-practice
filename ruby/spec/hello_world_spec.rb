# frozen_string_literal: true

require_relative '../lib/hello_world'

RSpec.describe HelloWorld do
  subject(:hello_world) { HelloWorld.new }

  describe 'hellowWorld' do
    it 'returns hello world' do
      expect(hello_world.hello).to eq('Hello World!')
    end
  end
end