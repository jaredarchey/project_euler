/******************** Problem 1 Solution ********************/

function getAllMultiples(n, below) {
	mul = [];
	count = 1;
	while (count * n < below && n != 0)
	{
		mul.push(count * n);
		count ++;
	}
	return mul;
}

function isIn(int, list) {
	is = false;
	list.forEach(function(item) {
		if (item == int)
		{
			is = true;
		}
	});
	return is;
}

function sumOfMultiples(num1, num2, max_value)
{
	var MAX_VALUE = max_value;
	var sum = 0;
	var multiples = [];
	getAllMultiples(num1, MAX_VALUE).forEach(function(item) {
		if (!isIn(item, multiples))
		{
			multiples.push(item);
		}
	});
	getAllMultiples(num2, MAX_VALUE).forEach(function(item) {
		if (!isIn(item, multiples))
		{
			multiples.push(item);
		}
	});
	multiples.forEach(function(item) {
	sum += item;
	});
	return sum;
}

function solve1() {
	int1 = document.getElementById("p1_int1").value;
	int2 = document.getElementById("p1_int2").value;
	max = document.getElementById("p1_max").value;
	if (isNaN(Number(int1)) || isNaN(Number(int2)) || isNaN(Number(max)))
	{
		alert("A number entered was invalid");
	}
	else
	{
		answer1 = sumOfMultiples(int1, int2, max);
		alert("The sum of all the multiples of " + int1 + " and " + int2 + " below " + max + " is " + answer1);
	}	
}

/******************** Problem 2 Solution ********************/

function fibonacciSequence(max) {
	var fibo = [1, 2];
	while (fibo[fibo.length-1] + fibo[fibo.length-2] < max)
	{
		fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2])
	}
	return fibo;
}

function fiboSum(max) {
	var sum = 0;
	var sequence = fibonacciSequence(max);
	sequence.forEach(function(num) {
		if (num % 2 == 0)
		{
			sum += num;
		}
	});
	return sum;
}

function solve2() {
	max2 = document.getElementById("p2_max").value;
	if (isNaN(Number(max2)))
	{
		alert("You entered an invalid number");
	}
	else
	{
		fibnacci = fiboSum(max2);
		alert("The sum of the numbers in the fibonacci sequence below " + max2 + " is " + fibnacci);
	}
}

/******************** Problem 3 Solution ********************/

function getPrimeStart(number) { //Gets a number the number is evenly divisible by
	count = 2;
	while (number%count != 0)
	{
		count++;
	}
	return count;
}

function factorize(number) {
	newFactors = [];
	prime = true;
	if (typeof(number) === 'number')
	{
		start = getPrimeStart(number);
		factors = [start, number / start];
	}
	else
	{
		factors = number;
	}
	factors.forEach(function(factor) {
		divisible = getPrimeStart(factor);
		if (divisible == factor) //Number is prime
		{
			newFactors.push(divisible);
		}
		else
		{
			prime = false;
			newFactors.push(divisible);
			newFactors.push(factor / divisible);
		}
	});
	if (prime == true)
	{
		return newFactors;
	}
	else
	{
		return factorize(newFactors);
	}
}

function maxFactor(num) {
	max = -1;
	primeFactors = factorize(num);
	primeFactors.forEach(function(item) {
		if (item > max)
		{
			max = item;
		}
	});
	return max;
}

function solve3() {
	max3 = document.getElementById("p3_max").value;
	if (isNaN(Number(max3)))
	{
		alert("You entered an invalid number");
	}
	else
	{
		maxF = maxFactor(Number(max3));
		alert("The maximum prime number of " + max3 + " is " + maxF);
	}
}