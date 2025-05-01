// map.js
export function initMap() {
  const map = L.map('map').setView([37.4903, 126.7188], 20);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([37.4903, 126.7188]).addTo(map)
    .bindPopup('우리집...')
    .openPopup();

  // ✅ 초기화 직후에도 강제 크기 재계산 (100ms 후)
  setTimeout(() => {
    map.invalidateSize();
  }, 100);

  // ✅ 휠 줌(혹은 버튼 줌) 끝난 후에도 크기 재계산
  map.on('zoomend', () => {
    map.invalidateSize();
  });

  return map;
}
