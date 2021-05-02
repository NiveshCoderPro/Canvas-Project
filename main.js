canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(250,150,50,0,2 * Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(310, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "Purple";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(380, 150, 50 , 0 , 2 *Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(420,100,50,0,2*Math.PI);
ctx.stroke();


color = "orange";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(530,100,50,0,2*Math.PI);
ctx.stroke();

color = "aqua";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(500,150,50,0,2*Math.PI);
ctx.stroke();

