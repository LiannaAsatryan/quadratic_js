//this function receives a string line as a parameter,
//splittes it into two parts, and returns that two parts
//this function checks whether the string is a real number or not
function is_real(str) {
        let countDots = 0
        if(str[0] == '.' || str[str.length - 1] == '.') {
                return false;
        }
        for(i = 0; i < str.length; i++) {
                if(str[i] == '-' && i == 0) {
                        continue
                }
                if(str[i] < '0' || str[i] > '9') {
                        if(str[i] == '.') {
                                countDots++
                        }
                        else{
                                return false
                        }
                }
        }
        return countDots <= 1
}


//this function solves the ax+b=0 linear equation, where str1=a, str2=b
//and returns the answer as a string
function linear(str1, str2) {
        if (!is_real(str1) || !is_real(str2)) {
                return "mistake";
        }
        let a = parseFloat(str1)
        let b = parseFloat(str2)
        if (a == 0 && b == 0) {
                return "R";
        }
        if(b != 0 && a == 0) {
                return "no solution";
        }
        if (b == 0) {
                return "0";
        }
        let d = (- b / a).toFixed(3)
        d = parseFloat(d) //to remove all the traling zeroes
        return d.toString();
}

//this function solves the quadratic equation ax^2+bx+c=0, where a, b, and c are given as 
//str1, str2, str3.  Answer is written in the <answer> string
function quadr(str1, str2, str3) {
        if(!is_real(str1) || !is_real(str2) || !is_real(str3)) {
                return "mistake"
        }
        else{
                let a = parseFloat(str1)
                if(a == 0) {
                     return linear(str2, str3);
                }
                else {
                        b = parseFloat(str2)
                        c = parseFloat(str3)
                        d = b * b - 4 * a * c //discriminant
                        if(d == 0) {
                                let temp = ( - b / ( 2 * a )).toFixed(3)
                                temp = parseFloat(temp) //to remove all the traling zeroes
                                return temp.toString();
                        }
                        else if(d < 0) {
                                return "no solution";
                        }else {
                                let s1 = ((- b + Math.sqrt(d)) / (2 * a)).toFixed(3)
                                let s2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(3)
                                s1 = parseFloat(s1)
                                s2 = parseFloat(s2)
                                if(s1 > s2) {
                                        return s2.toString() + ' ' + s1.toString();
                                } else {
                                        return s1.toString() + ' ' + s2.toString();
                                }
                        }
                }
        }
}

module.exports = {is_real, linear, quadr}
