var input1=document.getElementById("prime");

var result1=document.getElementById("result1");

var input2=document.getElementById("fact");

var result2=document.getElementById("result2");

var input3=document.getElementById("fibo");

var result3=document.getElementById("result3");

function findPrime(){
var flag=false;

for(var i=2;i<=(input1.value/2);i++)
{
	if((input1.value)%i==0)
	{
		flag=false;
		break;
	}
	flag=true;
}
if(flag) result1.innerHTML="Is Prime";
else result1.innerHTML="Is Not Prime";

}

function fact(num)
{
	if(num==0 || num==1) return 1;
	else return num* fact(num-1);
}

function findFact()
{
	result2.innerHTML=fact(input2.value);
}

function fibo(num)
{
	if(num==0) return 0;
	else if(num==1) return 1;
	else return fibo(num-1)+fibo(num-2);
}

function findFibo()
{
	result3.innerHTML=fibo(input3.value)-1;
}