
var showInfoBtn = document.getElementById('showInfo');
var extraInfo = document.getElementById('extraInfo');

showInfoBtn.addEventListener('click', function(e){
  extraInfo.classList.toggle('hidden');
})
