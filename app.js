function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function loadChart() {
  const symbol = document.getElementById('symbolInput').value.toUpperCase();
  if (!symbol) return;

  const frame = document.getElementById('chartFrame');
  frame.src = `https://s.tradingview.com/widgetembed/?symbol=NASDAQ:${symbol}&interval=D&theme=dark`;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
