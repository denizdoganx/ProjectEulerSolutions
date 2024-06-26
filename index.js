let sideBarElementNameList = [];
let answerTag;
window.onload = () => {
    const sideBarHtmlCollection = document.querySelector(".sidebar").children;
    answerTag = document.querySelector("#answer");
    Array.from(sideBarHtmlCollection).forEach((element) => {
        sideBarElementNameList.push(element.textContent);
    });
    for(let i = 0;i < sideBarHtmlCollection.length; i++) {
        sideBarHtmlCollection[i].onclick = () => {
            routeRequest(sideBarElementNameList[i]);
        }
    }

}

var routeRequest = (name) => {
    switch (name) {
        case sideBarElementNameList[0]:
            answerTag.innerHTML = name + " : " + multiplesOf3or5([3, 5], 1000);
            break;
        case sideBarElementNameList[1]:
            answerTag.innerHTML = name + " : " + evenFibonacciNumbers([1, 2], 4000000);
            break;
        case sideBarElementNameList[2]:
            answerTag.innerHTML = name + " : " + largestPrimeFactor(600851475143);
            break;
        case sideBarElementNameList[3]:
            answerTag.innerHTML = name + " : " + largestPalindromeProduct(3);
            break;
        case sideBarElementNameList[4]:
            answerTag.innerHTML = name + " : " + smallestMultiple(1, 20);
            break;
        case sideBarElementNameList[5]:
            answerTag.innerHTML = name + " : " + sumSquareDifference(100);
            break;
        case sideBarElementNameList[6]:
            answerTag.innerHTML = name + " : " + getNThPrimeNumber(10001);
            break;
        case sideBarElementNameList[7]:
            answerTag.innerHTML = name + " : " + getMaxProductWithGivenDigit(13);
            break;
        case sideBarElementNameList[8]:
            answerTag.innerHTML = name + " : " + findSpecialPythagoreanTriplet(1000);
            break;
        case sideBarElementNameList[9]:
            answerTag.innerHTML = name + " : " + summationOfPrimes(2000000);
            break;
        case sideBarElementNameList[10]:
            answerTag.innerHTML = name + " : " + getLargestProductInAGrid();
            break;
        case sideBarElementNameList[11]:
            answerTag.innerHTML = name + " : " + getTheSmallestNumberOfTrianglesWithMoreThanNDivisors(500);
            break;
        case sideBarElementNameList[12]:
            answerTag.innerHTML = name + " : " + largeSum();
            break;
        case sideBarElementNameList[13]:
            answerTag.innerHTML = name + " : " + longestCollatzSequence(1000000);
            break;
        case sideBarElementNameList[14]:
            answerTag.innerHTML = name + " : " + latticePaths(20, 20);
            break;
        case sideBarElementNameList[15]:
            answerTag.innerHTML = name + " : " + powerDigitSum(2, 1000);
            break;
        case sideBarElementNameList[16]:
            answerTag.innerHTML = name + " : " + numberLetterCounts(1, 1000);
            break;
        default:
            break;
    }
}

/**
 * 
 * @param {Number} lowerLimit 
 * @param {Number} upperLimit 
 * @returns {Number}
 */
const numberLetterCounts = (lowerLimit, upperLimit) => {

    let sum = 0;
    const numberMapper = new Map();
    numberMapper.set(1, "one");
    numberMapper.set(2, "two");
    numberMapper.set(3, "three");
    numberMapper.set(4, "four");
    numberMapper.set(5, "five");
    numberMapper.set(6, "six");
    numberMapper.set(7, "seven");
    numberMapper.set(8, "eight");
    numberMapper.set(9, "nine");
    numberMapper.set(10, "ten");
    numberMapper.set(11, "eleven");
    numberMapper.set(12, "twelve");
    numberMapper.set(13, "thirteen");
    numberMapper.set(14, "fourteen");
    numberMapper.set(15, "fifteen");
    numberMapper.set(16, "sixteen");
    numberMapper.set(17, "seventeen");
    numberMapper.set(18, "eighteen");
    numberMapper.set(19, "nineteen");
    numberMapper.set(20, "twenty");
    numberMapper.set(30, "thirty");
    numberMapper.set(40, "forty");
    numberMapper.set(50, "fifty");
    numberMapper.set(60, "sixty");
    numberMapper.set(70, "seventy");
    numberMapper.set(80, "eighty");
    numberMapper.set(90, "ninety");
    numberMapper.set(100, "onehundred");
    numberMapper.set(200, "twohundred");
    numberMapper.set(300, "threehundred");
    numberMapper.set(400, "fourhundred");
    numberMapper.set(500, "fivehundred");
    numberMapper.set(600, "sixhundred");
    numberMapper.set(700, "sevenhundred");
    numberMapper.set(800, "eighthundred");
    numberMapper.set(900, "ninehundred");
    numberMapper.set(1000, "onethousand");

    for(let i = lowerLimit;i <= upperLimit; i++) {
        if(numberMapper.has(i)) {
            //Number mapper contains given number
            sum += String(numberMapper.get(i)).length;
        }
        else  if(i > 20 && i < 100) {
            // from twenty-one to ninety-nine
            sum += String(numberMapper.get(i - (i % 10))).length;
            sum += String(numberMapper.get(i % 10)).length;
        }
        else {
            const secondPart = i % 100;
            if(numberMapper.has(secondPart)) {
                sum += String(numberMapper.get(secondPart)).length;
            }
            else {
                sum += String(numberMapper.get(secondPart - (secondPart % 10))).length;
                sum += String(numberMapper.get(secondPart % 10)).length;
            }
            sum += String(numberMapper.get(i - (secondPart))).length;
            //This is coming from the length of "and" word.
            sum += 3;
        }
    }
    return sum;
};


/**
 * 
 * @param {Number} num 
 * @param {Number} pow
 * @returns {Number} 
 */
const powerDigitSum = (num, pow) => {
    let number = BigInt(num) ** BigInt(pow);
    let digits = number.toString().split('');
    let digitSum = digits.reduce((sum, digit) => sum + Number(digit), 0);
    return digitSum;
};

/**
 * 
 * @param {Number} rowCount 
 * @param {Number} columnCount 
 * @returns {Number}
 */
const latticePaths = (rowCount, columnCount) => {
    const primeFactorsForPath = getPrimeFactors(rowCount + columnCount);
    const primeFactorsForRow = getPrimeFactors(rowCount);
    const primeFactorsForColumn = getPrimeFactors(columnCount);
    let latticePathsCount = 1;

    primeFactorsForRow.forEach((value, key) => {
        primeFactorsForPath.set(key, primeFactorsForPath.get(key) - value);
    });

    primeFactorsForColumn.forEach((value, key) => {
        primeFactorsForPath.set(key, primeFactorsForPath.get(key) - value);
    });

    primeFactorsForPath.forEach((value, key) => {
        latticePathsCount *= Math.pow(key, value);
    });
    return latticePathsCount;
};

/**
 * 
 * @param {Number} number 
 * @returns {Map}
 */
const getPrimeFactors = (number) => {
    const primeFactors = new Map();
    for(let i = 2;i <= number; i++) {
        if(isPrime(i)) {
            if(primeFactors.has(i)) {
                primeFactors.set(i, primeFactors.get(i) + 1);
            } else {
                primeFactors.set(i, 1);
            }
        } else {
            let num = i;
            for(let j = 2;j <= num; j++) {
                if(num % j === 0 && isPrime(j)) {
                    let pow = 0;
                    do {
                        pow++;
                        num = num / j;
                    } while(num % j === 0);
                    primeFactors.set(j, primeFactors.get(j) + pow);
                }
            }
        }
    }
    return primeFactors;
};

const longestCollatzSequence = (bound) => {
    let max = 0;
    let tempLength;
    let requestedNum;
    for(let i = 1;i < bound; i++) {
        tempLength =  getLengthOfCollatzSequence(i);
        if(tempLength > max) {
            max = tempLength;
            requestedNum = i;
        }
    }

    return requestedNum;
    
};


/**
 * 
 * @param {Number} num
 * @returns {Number} 
 */
const getLengthOfCollatzSequence = (num) => {
    let length = 1;
    while(num != 1) {
        if(num % 2 === 0) {
            num = num / 2;
        } else {
            num = 3 * num + 1;
        }
        length++;
    } 
    return length;
};


/**
 * @param {Array} coefficents
 * @param {Number} bound
 * @returns {Number}
 */
var multiplesOf3or5 = (coefficents ,bound) => {

    if(bound <= 2) {
        return 0;
    } else {
        let result = 0;
        for(let i = 2;i < bound; i++) {
            for(let j = 0;j < coefficents.length; j++) {
                if(i % coefficents[j] === 0) {
                    result += i;
                    break;
                }
            }
        }
        return result;
    }
}


/**
 * @param {Array} firstTerms
 * @param {Number} bound
 * @returns {Number}
 */
var evenFibonacciNumbers = (firstTerms, bound) => {
    let prev1 = firstTerms[0];
    let prev2 = firstTerms[1];
    let next;
    let total = 2;
    while((next = prev1 + prev2) < bound) {
        if(next % 2 === 0) {
            total += next;
        }
        prev1 = prev2;
        prev2 = next;
    }
    return total;
}

/**
 * 
 * @param {Number} num
 * @returns {Number} 
 */
var largestPrimeFactor =  (num) =>  {
    let largestPrime = 0;
    if(num <= 1) {
        return largestPrime;
    }
    else if(num === 2) {
        largestPrime = 2;
        return largestPrime;
    }
    else {
        let i = 2;
        while(num !== 1) {
            if(num % i === 0 && isPrime(i)) {
                num /= i
                while(num % i === 0) {
                    num /= i;
                }
                largestPrime = i;
            }
            i++;
        }
        return largestPrime;
    }
}

/**
 * 
 * @param {Number} num
 * @returns {boolean} 
 */
var isPrime = (num) => {

    if(num <= 1) {
        return false;
    }
    else {
        let result = true;
        for(let i = 2;i < parseInt(Math.sqrt(num))+1; i++) {
            if(num % i === 0) {
                result = false;
            }
        }
        return result;
    }
}

/**
 * 
 * @param {Number} digitCount 
 * @returns {Number}
 */
var largestPalindromeProduct = (digitCount) => {
    let numStrFormatMax = "", numStrFormatMin = "";
    let max, min, candidate, maxPalindrome = 0;
    for(let i = 0;i < digitCount; i++) {
        numStrFormatMax += "9";
        if(numStrFormatMin.length === 0){
            numStrFormatMin += "1";
        }
        else {
            numStrFormatMin += "0";
        }
    }
    max = Number(numStrFormatMax);
    min = Number(numStrFormatMin);

    for(let i = min;i <= numStrFormatMax; i++) {
        for(let j = min;j <= numStrFormatMax; j++) {
            candidate = i * j;
            if(isPalindrome(candidate) && candidate > maxPalindrome) {
                maxPalindrome = candidate;
            }
        }
    }
    return maxPalindrome;
}

/**
 * 
 * @param {Number} num
 * @returns {Boolean} 
 */
var isPalindrome = (num) => {
    const strForm = String(num);
    let length;
    let result = true;
    if(strForm.length % 2 === 0){
        length = strForm.length / 2;
    }
    else {
        length = (strForm.length - 1) / 2;
    }

    for(let i = 0;i < length; i++) {
        if(strForm.charAt(i) !== strForm.charAt(strForm.length - i - 1)) {
            result = false;
        }
    }
    return result;
}

/**
 * 
 * @param {Number} max
 * @param {Number} min
 * @returns {Number}  
 */
var smallestMultiple = (min, max) => {

    let wasItFound = false;
    let num = 2520;
    while(!wasItFound) {
        wasItFound = true;
        for(let i = min;i <= max; i++) {
            if(num % i !== 0) {
                wasItFound = false;
            }
        }
        if(!wasItFound){
            num+=2;
        }
    }
    return num;
}

/**
 * 
 * @param {Number} bound
 * @returns {Number} 
 */
var sumSquareDifference = (bound) => {
    let sumOfTheSquares = 0;
    let squareOfTheSum = 0;

    for(let i = 1;i <= bound; i++) {
        sumOfTheSquares += Math.pow(i, 2);
        squareOfTheSum += i;
    }

    return Math.pow(squareOfTheSum, 2) - sumOfTheSquares;
}

/**
 * 
 * @param {Number} n
 * @returns {Number} 
 */
var getNThPrimeNumber = (n) => {
    let counter = 0;
    let num = 2;
    let wasItFound = false;
    while(!wasItFound) {
        if(isPrime(num)) {
            counter++;
            if(counter === n) {
                wasItFound = true;
            }
        }
        if(!wasItFound) {
            num++;
        }
    }
    return num;
}

/**
 * @param {Number} digitCount
 * @returns {Number}
 */
var getMaxProductWithGivenDigit = (digitCount) => {
    let maxProduct = 0, tempProduct = 1;
    const constantNum = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
    for(let i = 0;i < constantNum.length - digitCount; i++) {
        tempProduct = 1;
        for(let j = 0;j < digitCount; j++) {
            tempProduct *= Number(constantNum.charAt(i + j));
        }
        if(tempProduct > maxProduct) {
            maxProduct = tempProduct;
        }
    }
    return maxProduct;
};

/**
 * 
 * @param {Number} edgeTotal
 * @returns {Number} 
 */
var findSpecialPythagoreanTriplet = (edgeTotal) => {
    /**
     * we can use a general formula to find out all pythagorean triplet.
     **     a = m^2 - n^2
     **     b = 2 * m * n
     **     c = m^2 + n^2
     **     a + b + c = 2*m^2 + 2*m*n
     */
    let abcTotal = 0;
    let isFound = false;
    let m = 0 , n = 0;
    let a, b, c;
    for(let i = 1;i < 1000; i++) {
        for(let j = 1;j <= i; j++) {
            abcTotal = 2*i*i + 2*i*j;
            if(abcTotal === edgeTotal) {
                isFound = true;
                m = i;
                n = j;
                break;
            }
        }
        if(isFound) {
            break;
        }
    }
    a = m*m - n*n;
    b = 2*m*n;
    c = m*m + n*n;
    return a*b*c;
};

/**
 * 
 * @param {Number} bound 
 */
var summationOfPrimes = (bound) => {
    let total = 10;
    for(let i = 3;i < bound; i+=2) {
        if(i % 3 === 0 || i % 5 === 0) {
            continue;
        }
        if(isPrime(i)) {
            total += i;
        }
    }
    return total;
};

/**
 * @returns {Number}
 */
var getLargestProductInAGrid = () => {
    const grid = `
    08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
    49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
    81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
    52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
    22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
    24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
    32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
    67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
    24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
    21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
    78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
    16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
    86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
    19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
    04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
    88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
    04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
    20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
    20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
    01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48`;
    const parsedGrid = grid.split(" ");
    const matrix = [];
    let tempCell;
    let tempRowArray = [];
    const cleanedMatrix = [];
    let counter = 0; 
    let maxProduct = 0;
    parsedGrid.forEach((element) => {
        if(element != '\n' && element != '') {
            tempCell = "";
            for(let i = 0;i < element.length; i++) {
                if(element.charAt(i) != "\n") {
                    tempCell += element.charAt(i);
                }
            }
            matrix.push(tempCell);
        }
    });
    
    for(let i = 0;i < matrix.length; i++) {
        if(counter != 20) {
            tempRowArray.push(matrix[i]);
            counter++;
            if(counter == 20) {
                cleanedMatrix.push(tempRowArray);
                counter = 0;
                tempRowArray = [];
            }
        }
    }

    

    console.log(cleanedMatrix);
    console.log(cleanedMatrix.length);



    for(let i = 0;i < cleanedMatrix.length - 4; i++) {
        for(let j = 0;j < cleanedMatrix[i].length - 4; j++) {
            const tempProduct = getMaxProductWithGivenMatrix([
                [cleanedMatrix[i][j], cleanedMatrix[i][j+1], cleanedMatrix[i][j+2], cleanedMatrix[i][j+3]],
                [cleanedMatrix[i+1][j], cleanedMatrix[i+1][j+1], cleanedMatrix[i+1][j+2], cleanedMatrix[i+1][j+3]],
                [cleanedMatrix[i+2][j], cleanedMatrix[i+2][j+1], cleanedMatrix[i+2][j+2], cleanedMatrix[i+2][j+3]],
                [cleanedMatrix[i+3][j], cleanedMatrix[i+3][j+1], cleanedMatrix[i+3][j+2], cleanedMatrix[i+3][j+3]]
            ]);
            if(tempProduct > maxProduct) {
                maxProduct = tempProduct;
            }
        }
    }
    return maxProduct;
};


/**
 * 
 * @param {Array} matrix
 * @returns {Number} 
 */
var getMaxProductWithGivenMatrix = (matrix) => {

    let rowMax = 0, columnMax = 0, diagonalMax = 0;
    let tempProduct = 1, firstDiagonalProduct = 1, secondDiagonalProduct = 1;
    for(let i = 0;i < matrix.length; i++) {
        tempProduct = 1;
        for(let j = 0;j < matrix[i].length; j++){
            tempProduct *= matrix[i][j];
            if(i == j) {
                firstDiagonalProduct *= matrix[i][j];
            }
            if((i + j) == matrix.length-1) {
                secondDiagonalProduct *= matrix[i][j];
            }
        }
        if(tempProduct > rowMax) {
            rowMax = tempProduct;
        }
    }

    if(firstDiagonalProduct > secondDiagonalProduct) {
        diagonalMax = firstDiagonalProduct;
    } else {
        diagonalMax = secondDiagonalProduct;
    }

    for(let i = 0;i < matrix.length; i++) {
        tempProduct = 1;
        for(let j = 0;j < matrix[i].length; j++) {
            tempProduct *= matrix[j][i];
        }
        if(tempProduct > columnMax) {
            columnMax = tempProduct;
        }
    }


    return Math.max(rowMax, columnMax, diagonalMax);
};


/**
 * 
 * @param {Number} N
 * @returns {Number} 
 */
const getTheSmallestNumberOfTrianglesWithMoreThanNDivisors = (N) => {
    let counter = 0;
    let requestedTriangleNum;
    do {
        counter ++;
        requestedTriangleNum = getNThTriangleNumber(counter);
        
    } while(howManyDivisibleDoesItHave(requestedTriangleNum) <= N);
    return requestedTriangleNum;
};

/**
 * 
 * @param {Number} num
 * @returns {Number} 
 */
const howManyDivisibleDoesItHave = (num) => {
    const powers = [];
    let divisibleCount = 1;
    for(let i = 2;i <= num; i ++) {
        if(isPrime(i) && num % i === 0) {
            let pow = 0;
            do {
                pow++;
                num /= i;
            } while(num % i === 0);
            powers.push(pow);
        }
    }
    powers.forEach((pow) => {
        divisibleCount *= (pow + 1);
    });
    return divisibleCount;
};  

/**
 * 
 * @param {Number} n 
 * @returns {Number}
 */
const getNThTriangleNumber = (n) => {
    return (n*(n+1)) / 2;
};

/**
 * @returns {String}
 */
const largeSum = () => {
    let firstTenDigit = "";
    let inHand = 0, nThDigitTotal;
    const numbers = [
        "37107287533902102798797998220837590246510135740250",
        "46376937677490009712648124896970078050417018260538",
        "74324986199524741059474233309513058123726617309629",
        "91942213363574161572522430563301811072406154908250",
        "23067588207539346171171980310421047513778063246676",
        "89261670696623633820136378418383684178734361726757",
        "28112879812849979408065481931592621691275889832738",
        "44274228917432520321923589422876796487670272189318",
        "47451445736001306439091167216856844588711603153276",
        "70386486105843025439939619828917593665686757934951",
        "62176457141856560629502157223196586755079324193331",
        "64906352462741904929101432445813822663347944758178",
        "92575867718337217661963751590579239728245598838407",
        "58203565325359399008402633568948830189458628227828",
        "80181199384826282014278194139940567587151170094390",
        "35398664372827112653829987240784473053190104293586",
        "86515506006295864861532075273371959191420517255829",
        "71693888707715466499115593487603532921714970056938",
        "54370070576826684624621495650076471787294438377604",
        "53282654108756828443191190634694037855217779295145",
        "36123272525000296071075082563815656710885258350721",
        "45876576172410976447339110607218265236877223636045",
        "17423706905851860660448207621209813287860733969412",
        "81142660418086830619328460811191061556940512689692",
        "51934325451728388641918047049293215058642563049483",
        "62467221648435076201727918039944693004732956340691",
        "15732444386908125794514089057706229429197107928209",
        "55037687525678773091862540744969844508330393682126",
        "18336384825330154686196124348767681297534375946515",
        "80386287592878490201521685554828717201219257766954",
        "78182833757993103614740356856449095527097864797581",
        "16726320100436897842553539920931837441497806860984",
        "48403098129077791799088218795327364475675590848030",
        "87086987551392711854517078544161852424320693150332",
        "59959406895756536782107074926966537676326235447210",
        "69793950679652694742597709739166693763042633987085",
        "41052684708299085211399427365734116182760315001271",
        "65378607361501080857009149939512557028198746004375",
        "35829035317434717326932123578154982629742552737307",
        "94953759765105305946966067683156574377167401875275",
        "88902802571733229619176668713819931811048770190271",
        "25267680276078003013678680992525463401061632866526",
        "36270218540497705585629946580636237993140746255962",
        "24074486908231174977792365466257246923322810917141",
        "91430288197103288597806669760892938638285025333403",
        "34413065578016127815921815005561868836468420090470",
        "23053081172816430487623791969842487255036638784583",
        "11487696932154902810424020138335124462181441773470",
        "63783299490636259666498587618221225225512486764533",
        "67720186971698544312419572409913959008952310058822",
        "95548255300263520781532296796249481641953868218774",
        "76085327132285723110424803456124867697064507995236",
        "37774242535411291684276865538926205024910326572967",
        "23701913275725675285653248258265463092207058596522",
        "29798860272258331913126375147341994889534765745501",
        "18495701454879288984856827726077713721403798879715",
        "38298203783031473527721580348144513491373226651381",
        "34829543829199918180278916522431027392251122869539",
        "40957953066405232632538044100059654939159879593635",
        "29746152185502371307642255121183693803580388584903",
        "41698116222072977186158236678424689157993532961922",
        "62467957194401269043877107275048102390895523597457",
        "23189706772547915061505504953922979530901129967519",
        "86188088225875314529584099251203829009407770775672",
        "11306739708304724483816533873502340845647058077308",
        "82959174767140363198008187129011875491310547126581",
        "97623331044818386269515456334926366572897563400500",
        "42846280183517070527831839425882145521227251250327",
        "55121603546981200581762165212827652751691296897789",
        "32238195734329339946437501907836945765883352399886",
        "75506164965184775180738168837861091527357929701337",
        "62177842752192623401942399639168044983993173312731",
        "32924185707147349566916674687634660915035914677504",
        "99518671430235219628894890102423325116913619626622",
        "73267460800591547471830798392868535206946944540724",
        "76841822524674417161514036427982273348055556214818",
        "97142617910342598647204516893989422179826088076852",
        "87783646182799346313767754307809363333018982642090",
        "10848802521674670883215120185883543223812876952786",
        "71329612474782464538636993009049310363619763878039",
        "62184073572399794223406235393808339651327408011116",
        "66627891981488087797941876876144230030984490851411",
        "60661826293682836764744779239180335110989069790714",
        "85786944089552990653640447425576083659976645795096",
        "66024396409905389607120198219976047599490197230297",
        "64913982680032973156037120041377903785566085089252",
        "16730939319872750275468906903707539413042652315011",
        "94809377245048795150954100921645863754710598436791",
        "78639167021187492431995700641917969777599028300699",
        "15368713711936614952811305876380278410754449733078",
        "40789923115535562561142322423255033685442488917353",
        "44889911501440648020369068063960672322193204149535",
        "41503128880339536053299340368006977710650566631954",
        "81234880673210146739058568557934581403627822703280",
        "82616570773948327592232845941706525094512325230608",
        "22918802058777319719839450180888072429661980811197",
        "77158542502016545090413245809786882778948721859617",
        "72107838435069186155435662884062257473692284509516",
        "20849603980134001723930671666823555245252804609722",
        "53503534226472524250874054075591789781264330331690"
    ]


    let rowSelector, columnSelector;

    for(columnSelector = numbers[0].length-1;columnSelector >= 0; columnSelector--) {
        nThDigitTotal = 0;
        for(rowSelector = 0;rowSelector < numbers.length; rowSelector++) {
            nThDigitTotal += Number(numbers[rowSelector][columnSelector]);
        }
        

        nThDigitTotal += inHand;
        firstTenDigit += (nThDigitTotal % 10).toString();
        inHand = Math.floor(nThDigitTotal / 10);
    }
    firstTenDigit += inHand;
    let realForm = "";

    for(let i = firstTenDigit.length - 1;i >= firstTenDigit.length-10; i--) {
        realForm += firstTenDigit[i];
    }
    
    return realForm;
};
