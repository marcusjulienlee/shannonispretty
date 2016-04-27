var wordmark = document.querySelector('.rainbow-wordmark');

var wordmarkImg = wordmark.querySelector('.rainbow-wordmark__image');
var wordmarkTrigger = document.querySelector('.wordmark_trigger');
var canvas = wordmark.querySelector('.rainbow-wordmark__canvas');
var ctx = canvas.getContext('2d');
var trailCount = 100;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

// ----- load image ----- //

var whiteImg = new Image();
whiteImg.onload = onWhiteImgLoad;
whiteImg.src = 'http://i65.tinypic.com/5nuc1x.png';

function onWhiteImgLoad() {
  setColorCanvas( 'blue', '#11B5D8' );
  setColorCanvas( 'gold', '#EBDF57' );
  setColorCanvas( 'green', '#3ED866' );
  setColorCanvas( 'magenta', '#F262BD' );
  // Start animating function, continuously running, but not always displayed
  animate();
}

var colorCanvases = {};

// get a canvas with the logotype rendered in a color
function setColorCanvas( name, color ) {
  var colorCanvas = document.createElement('canvas');
  colorCanvas.width = whiteImg.width;
  colorCanvas.height = whiteImg.height;
  var colorCtx = colorCanvas.getContext('2d');
  colorCtx.drawImage( whiteImg, 0, 0 );
  colorCtx.globalCompositeOperation = 'source-in';
  colorCtx.fillStyle = color;
  colorCtx.fillRect( 0, 0, whiteImg.width, whiteImg.height );
  colorCanvases[ name ] = colorCanvas;
}

// ----- animate rainbow ----- //

var t = 0;
var isTrippy = false;

var rainbow = [];
(function() {
  for ( var i=0; i < trailCount; i++ ) {
    rainbow.push(null);
  }
})();

wordmarkTrigger.addEventListener('click', function() {
  // Trip variable controlling whether animates or not
  if (isTrippy === true) {
    isTrippy = false;
    wordmarkTrigger.innerHTML = "Mind on everyone else"
  }
  else {
    isTrippy = true;
    wordmarkTrigger.innerHTML = "Mind on Bae"
  }
});

var colorCycle = [ 'blue', 'gold', 'green', 'magenta' ];

function animate() {
  render();
  update();
  requestAnimationFrame(animate);
}

function update() {
  t++;

  var colorCycleIndex = Math.floor( t / 8 ) % 4;
  // Only animate if isTrippy active, otherwise don't display
  var nextColor = isTrippy ? colorCycle[ colorCycleIndex ] : null;

  rainbow.pop();
  rainbow.pop();
  rainbow.pop();
  rainbow.unshift( nextColor );
  rainbow.unshift( nextColor );
  rainbow.unshift( nextColor );
}

function render() {
  ctx.clearRect( 0, 0, canvasWidth, canvasHeight );

  // iterate backwards through rainbow
  for ( var i = rainbow.length-1; i >= 0; i-- ) {
    var color = rainbow[i];
    if ( color ) {
      ctx.drawImage( colorCanvases[ color ], i+1, i+1 );
    }
  }
}
