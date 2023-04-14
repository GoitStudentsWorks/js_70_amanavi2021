let startY;

export function onTouchStart(event) {
  const touch = event.touches[0];
  startY = touch.clientY;
}

export function onTouchMove(event) {
  const touch = event.touches[0];
  const deltaY = touch.clientY - startY;

  // Перевіряємо чи є скрол по вертикалі
  if (Math.abs(deltaY) > 10) {
    return;
  }

  return true;
 }
