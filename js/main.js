var slider=document.getElementById("barra1");
var output =document.getElementById("value");

output.innerHTML=slider.value;

slider.oninput = function()
{	
	output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function()
{
	var x = slider.value;
	var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(241,241,214)' + x + '%)';
	slider.style.background=color;

})

var slider2=document.getElementById("barra2");
var output2 =document.getElementById("value2");

output2.innerHTML=slider2.value2;

slider2.oninput = function()
{	
	output2.innerHTML = this.value2;
}

slider2.addEventListener("mousemove", function()
{
	var y = slider2.value2;
	var color2 = 'linear-gradient(90deg, rgb(117,252,117)' + y + '%, rgb(241,241,214)' + y + '%)';
	slider2.style.background=color2;

})