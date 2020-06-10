
var showInfoBtn = document.getElementById('showInfo');
var extraInfo = document.getElementById('extraInfo');
var showInfoBtn2 = document.getElementById('showInfo2');
var extraInfo2 = document.getElementById('extraInfo2');

showInfoBtn.addEventListener('click', function(e){
  extraInfo.classList.toggle('hidden');
})

showInfoBtn2.addEventListener('click', function(e){
  extraInfo2.classList.toggle('hidden');
})
