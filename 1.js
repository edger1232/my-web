function filterCafes() {
    // 獲取篩選條件
    const distanceFilter = document.getElementById('distance').value;
    const typeFilter = document.getElementById('type').value;
    const cafeItems = document.querySelectorAll('.cafe-item');

    cafeItems.forEach(item => {
      const distance = parseInt(item.getAttribute('data-distance'));
      const type = item.getAttribute('data-type');

      // 檢查距離條件
      let distanceMatch = distanceFilter === 'all' || distance <= parseInt(distanceFilter);
      // 檢查類型條件
      let typeMatch = typeFilter === 'all' || type === typeFilter;

      // 如果符合條件顯示，否則隱藏
      if (distanceMatch && typeMatch) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  // 初始狀態隱藏所有咖啡廳，直到按下確認
  document.addEventListener('DOMContentLoaded', () => {
    const cafeItems = document.querySelectorAll('.cafe-item');
    cafeItems.forEach(item => item.classList.add('hidden'));
  });