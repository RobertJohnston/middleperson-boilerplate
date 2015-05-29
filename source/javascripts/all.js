require jquery
require bootstrap-sprockets
require_tree


<script type="text/javascript">
  var i=0;
  var k=0;
  var dv;
  var speed=60;     /* adjust this value to suit */
function init() {
   dv=document.getElementsByTagName('div');
for(c=0;c<dv.length;c++) {
if(dv[c].className=='clouds') {
   dv[c].number=k++;
  }
 }
   rollClouds();
 }
function rollClouds() {
for(var c=0;c<dv.length;c++) {
if(dv[c].className=='clouds') {
if(dv[c].number%2==0) {
   dv[c].style.backgroundPosition=i+'px';
 }
else {
   dv[c].style.backgroundPosition=-i+'px';
   }
  }
 }
   i++;  /* to change direction use  i--;  */
   scroller=setTimeout(function(){rollClouds()},speed);
 }
   window.addEventListener?
   window.addEventListener('load',init,false):
   window.attachEvent('onload',init);
</script>
