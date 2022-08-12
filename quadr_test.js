fs = require('fs')
my_lib = require('./quadr_functions.js')

//this function reads the values from the input file, calls the linear function,
//writes the gotten answer into the output file, compares it with the
//corresponding data from the golden file
//and writes the appropriate message in the result file.
//These operations are performed one after another for every line
function test() {
	let input_list = fs.readFileSync('input.txt', 'utf8').split('\n')
	let golden_list = fs.readFileSync('golden.txt', 'utf8').split('\n')
	input_list.pop()
	golden_list.pop()
	let o_file = fs.writeFileSync('output.txt', '')
	let r_file = fs.writeFileSync('result.txt', '')
	let i = 0
        for (line of input_list) {
    		nums = line.split(' ')
		let answer = my_lib.quadr(nums[0], nums[1], nums[2])
    		fs.appendFileSync('output.txt', answer + '\n')
		if(golden_list[i] == answer) {
			fs.appendFileSync('result.txt', "test passed \n")
		} else {
			fs.appendFileSync('result.txt', "test not passed \n")
		}
		i += 1
        }
}

test()








