// Функция для загрузки изображения и возврата промиса
function loadImage() {
  return new Promise((resolve, reject) => {
    const imageUrlInput = document.getElementById("imageUrlInput").value;
    const image = new Image();

    // Устанавливаем обработчики событий для успешной и неудачной загрузки изображения
    image.onload = () => {
      resolve(image); // Разрешаем промис с изображением после успешной загрузки
    };

    image.onerror = () => {
      reject(new Error("Не удалось загрузить изображение"));
    };

    // Устанавливаем URL изображения
    image.src = imageUrlInput;
  });
}

// Назначаем обработчик события на кнопку "Загрузить изображение"
document.getElementById("loadImageButton").addEventListener("click", () => {
  loadImage()
    .then((loadedImage) => {
      const imageContainer = document.getElementById("imageContainer");
      imageContainer.innerHTML = ""; // Очищаем контейнер
      imageContainer.appendChild(loadedImage); // Добавляем загруженное изображение
    })
    .catch((error) => {
      console.error(error);
      alert("Произошла ошибка: " + error.message);
    });
});
