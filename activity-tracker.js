//
// Name:        Activity Tracker
// Author:      ornjman
// About:       This class helps to track activity for testing whether or not 
//              the user is active or idle.
//              
var activityTracker = function () {

  // timeout variable
  var t;

  // minimum time that has to pass before being considered idle
  var minimumIdleTime = 10000; 

  // callback storage arrays
  var idleCallbacks = [];
  var activeCallbacks = [];

  window.onload = resetTimer;
  
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  // functions to register active/idle functions that are to be called
  function registerActiveCallback(functionName){
    activeCallbacks.push(functionName);
  }
  function registerIdleCallback(functionName){
    idleCallbacks.push(functionName);
  }

  // called when the minimumIdleTime is exceeded to call all registered functions
  function idle(){
    for(var i = 0; i < idleCallbacks.length; i++){
      idleCallbacks[i]();
    }
  }

  // called when activity occurs after going idle to call all registered functions
  // note that any blocking functions will have issues if the time to call those
  // functions exceed the minimumIdleTime
  function active(){
    for(var i = 0; i < activeCallbacks.length; i++){
      activeCallbacks[i]();
    }
  }
  // called when activity occurs to reset the timer
  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(idle, minimumIdleTime);
    active();
  }
  // function to set the idle time value
  function setMinimumIdleTime(minimumTime){
    minimumIdleTime = minimumTime;
  }

  var o = new Object();

  // register functions for scope
  o.registerActiveCallback = registerActiveCallback;
  o.registerIdleCallback = registerIdleCallback;
  o.minimumIdleTime = minimumIdleTime;

  return o;
};
