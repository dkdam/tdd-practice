def better_than_average(arr, points)
    avg = arr.reduce(:+) / arr.length
    return true ? points > avg : false
end