# frozen_string_literal: true

def shortcut(s)
    vowels = /[aeiou]/
    s.gsub(vowels,'')
end