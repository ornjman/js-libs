// gets width of window's inner dimensions
function getWindowInnerWidth(){
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
// gets height of window's inner dimensions
function getWindowInnerHeight(){
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}
// gets object representation of window's inner dimensions
function getWindowInnerDimensions(){
  return { "width": getWindowInnerWidth(), "height": getWindowInnerHeight() };
}




