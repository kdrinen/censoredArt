var socket = io.connect('http://localhost:3000')

socket.on('connect', function(data){ 
console.log("connected to the server" + socket.id);
})

$(function(){
})
//FadeIn/Out Effects
$(".Title").delay(2000).fadeOut(2500);
$(".content").delay(2000).fadeIn(2500);

//Operation Pixelate
var image_tracker = 'false';
function change(){
  var image = document.getElementById('kiss');
  if (image_tracker=='false'){
    image.src ='images/a.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/1.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change2(){
  var image = document.getElementById('cry');
  if (image_tracker=='false'){
    image.src ='images/b.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/2.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change3(){
  var image = document.getElementById('eat');
  if (image_tracker=='false'){
    image.src ='images/c.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/3.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change4(){
  var image = document.getElementById('cross1');
  if (image_tracker=='false'){
    image.src ='images/d.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/4.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change5(){
  var image = document.getElementById('cross2');
  if (image_tracker=='false'){
    image.src ='images/e.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/5.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change6(){
  var image = document.getElementById('nun');
  if (image_tracker=='false'){
    image.src ='images/f.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/6.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change7(){
  var image = document.getElementById('smoke');
  if (image_tracker=='false'){
    image.src ='images/g.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/7.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change8(){
  var image = document.getElementById('cross3');
  if (image_tracker=='false'){
    image.src ='images/h.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/8.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change9(){
  var image = document.getElementById('cross4');
  if (image_tracker=='false'){
    image.src ='images/i.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/9.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change10(){
  var image = document.getElementById('cross5');
  if (image_tracker=='false'){
    image.src ='images/j.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/10.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change11(){
  var image = document.getElementById('tape');
  if (image_tracker=='false'){
    image.src ='images/k.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/11.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change12(){
  var image = document.getElementById('stupid');
  if (image_tracker=='false'){
    image.src ='images/l.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/12.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change13(){
  var image = document.getElementById('gma');
  if (image_tracker=='false'){
    image.src ='images/m.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/13.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change14(){
  var image = document.getElementById('seat');
  if (image_tracker=='false'){
    image.src ='images/n.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/14.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change15(){
  var image = document.getElementById('skull');
  if (image_tracker=='false'){
    image.src ='images/o.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/15.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change16(){
  var image = document.getElementById('pathetic');
  if (image_tracker=='false'){
    image.src ='images/p.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/16.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change17(){
  var image = document.getElementById('pee');
  if (image_tracker=='false'){
    image.src ='images/q.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/17.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change18(){
  var image = document.getElementById('puppet');
  if (image_tracker=='false'){
    image.src ='images/r.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/18.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change19(){
  var image = document.getElementById('gun');
  if (image_tracker=='false'){
    image.src ='images/s.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/19.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change20(){
  var image = document.getElementById('bitch');
  if (image_tracker=='false'){
    image.src ='images/t.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/20.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change21(){
  var image = document.getElementById('fat');
  if (image_tracker=='false'){
    image.src ='images/u.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/21.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change22(){
  var image = document.getElementById('bomb');
  if (image_tracker=='false'){
    image.src ='images/v.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/22.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change23(){
  var image = document.getElementById('feet');
  if (image_tracker=='false'){
    image.src ='images/w.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/23.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change24(){
  var image = document.getElementById('urinal');
  if (image_tracker=='false'){
    image.src ='images/x.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/24.jpg'
    image_tracker = 'false';
  }
}

var image_tracker = 'false';
function change25(){
  var image = document.getElementById('old');
  if (image_tracker=='false'){
    image.src ='images/y.jpg'
    image_tracker = 'true';
  }else{
    image.src ='images/25.jpg'
    image_tracker = 'false';
  }
}
