module.exports = function toReadable (number) {
    const objOfNum = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        hundred: "hundred"
    };

    if (number <=20) {
        return objOfNum[number];
    }
    else if (number >20 && number < 100) {
        let one = number % 10;
        return (one === 0 ) ? objOfNum[number] : objOfNum[number-one] + " " + objOfNum[one];
    }
    else {
        let one = number % 100;
        return (one === 0) ? objOfNum[number/100] + " " + objOfNum.hundred :
                (one < 21) ? objOfNum[(number-one)/100] + " " + objOfNum.hundred + " " + objOfNum[one] :
                (one >20 && one%10 === 0) ? objOfNum[(number-one)/100] + " " + objOfNum.hundred + " " + objOfNum[one] :
                (one >20 && one%10 > 0) ? objOfNum[(number-one)/100] + " " + objOfNum.hundred + " " + objOfNum[(one-one%10)] + " " + objOfNum[one%10] : '';
        }


}
