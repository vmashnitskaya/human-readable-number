module.exports = function toReadable(number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


    function convert_hundreds(num) {
        return (num < 1000 && num >= 100) ? (ones[Math.floor(num / 100)]) + ' hundred ' + convert_tens(num % 100) : convert_tens(num);
    }

    function convert_tens(num) {
        if (num < 10) {
            return ones[num];
        } else if (num >= 10 && num < 20) {
            return teens[num - 10];
        } else {
            return tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
        }
    }

    function convert(num) {
        return (num == 0) ? 'zero' : convert_hundreds(num);
    }

    return convert(number).trim();
}




