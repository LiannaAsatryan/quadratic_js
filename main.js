fs = require('fs')
my_lib = require('./quadr_functions.js')

function main()
{
	let input_list = fs.readFileSync('input.txt', 'utf8').split('\n')
	input_list.pop()
	let o_file = fs.writeFileSync('output.txt', '')
        for (line of input_list) {
    		nums = line.split(' ')
		let answer = my_lib.quadr(nums[0], nums[1], nums[2])
    		fs.appendFileSync('output.txt', answer + '\n')
        }
}

main()

