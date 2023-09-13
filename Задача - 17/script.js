// Функция debounce возвращает функцию, которая задерживает вызов переданной функции на определенный период времени
function debounce(func, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

// Функция geocode выполняет запрос к API GraphHopper с помощью Fetch API,
// получает данные по введенному адресу и обновляет выпадающий список с результатами
function geocode() {
  const address = document.getElementById("address-input").value;

  // Проверка, что введенный адрес не является пустым
  if (address.trim().length > 0) {
    // Запрос к API GraphHopper для получения данных по введенному адресу
    fetch(
      `https://graphhopper.com/api/1/geocode?q=${encodeURIComponent(
        address
      )}&limit=10&key=8b125f6e-0a1f-4a3f-b0ce-7f732b411d05`
    )
      .then((response) => response.json())
      .then((data) => {
        const select = document.getElementById("address-select");

        // Очистка выпадающего списка перед обновлением
        select.innerHTML = "";

        // Создание новых элементов option и добавление их в выпадающий список
        data.hits.forEach((hit) => {
          const option = document.createElement("option");
          option.value = hit.name;
          option.innerHTML = `${hit.name}, ${hit.city}, ${hit.country}`;

          select.appendChild(option);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// Получение ссылок на элементы DOM
const addressInput = document.getElementById("address-input");
const addressSelect = document.getElementById("address-select");

// Использование функции debounce для задержки вызова функции geocode при вводе адреса
const debouncedGeocode = debounce(geocode, 500);

// Обработчик события input для поля ввода адреса
addressInput.addEventListener("input", debouncedGeocode);

// Обработчик события change для выпадающего списка с адресами
addressSelect.addEventListener("change", () => {
  // Обновление значения в поле ввода адреса при выборе адреса из списка
  addressInput.value = addressSelect.value;
});
