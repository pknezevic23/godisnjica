
function stvoriSrce() {
  const srce = document.createElement('div');
  srce.classList.add('srce');
  srce.textContent = '❤️';
  srce.style.left = Math.random() * 100 + 'vw';
  srce.style.fontSize = Math.random() * 20 + 20 + 'px';
  document.body.appendChild(srce);
  setTimeout(() => srce.remove(), 5000);
}

setInterval(stvoriSrce, 300);

function stvoriBalon() {
  const balon = document.createElement('div');
  balon.classList.add('balon');
  balon.textContent = '🎈';
  balon.style.left = Math.random() * 100 + 'vw';
  balon.style.fontSize = Math.random() * 30 + 20 + 'px';
  document.body.appendChild(balon);
  setTimeout(() => balon.remove(), 10000);
}

setInterval(stvoriBalon, 500);

document.getElementById("gumbSkrivenaPoruka").addEventListener("click", function() {
  document.getElementById("skrivena").style.display = "block";
  this.style.display = "none";
});
