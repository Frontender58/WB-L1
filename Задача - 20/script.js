// Функция для получения постов из паблика
function getPosts() {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src =
      "https://api.vk.com/method/wall.get?callback=handleResponse&domain=championsscup&count=10&v=5.124&access_token=364ba8c1364ba8c1364ba8c1ee355e375e3364b364ba8c1534a5580fadcfa7a30341f24";
    document.body.appendChild(script);

    // Глобальная функция обратного вызова
    window.handleResponse = function (response) {
      if (response.error) {
        reject(response.error.error_msg);
      } else {
        resolve(response.response.items);
      }
      // Удаление скриптового тега
      document.body.removeChild(script);
    };
  });
}

// Функция для отображения постов в виджете
function renderPosts(posts) {
  const widget = document.getElementById("widget");
  widget.innerHTML = "";

  posts.forEach(function (post) {
    const postElem = document.createElement("div");
    postElem.className = "post";
    postElem.innerText = post.text;
    widget.appendChild(postElem);
  });
}

// Функция для проверки наличия данных в кэше
function getCache() {
  if (typeof localStorage !== "undefined") {
    const cachedData = localStorage.getItem("posts");
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  }
  return [];
}

// Функция для сохранения данных в кэше
function saveCache(posts) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("posts", JSON.stringify(posts));
  }
}

const cachedPosts = getCache();
if (cachedPosts.length > 0) {
  renderPosts(cachedPosts);
}

getPosts()
  .then(function (posts) {
    const allPosts = cachedPosts.concat(posts);
    renderPosts(allPosts);
    saveCache(allPosts);
  })
  .catch(function (error) {
    console.error(error);
  });

document.getElementById("widget").addEventListener("scroll", function () {
  if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
    getPosts()
      .then(function (posts) {
        const cachedPosts = getCache();
        const allPosts = cachedPosts.concat(posts);
        renderPosts(allPosts);
        saveCache(allPosts);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
});

// Функция для подсчета занимаемой памяти в LocalStorage
function calculateLocalStorageSize() {
  let totalBytes = 0;

  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalBytes += localStorage[key].length * 2; // Умножаем на 2 для учета Unicode-кодировки
    }
  }

  return totalBytes;
}

// Функция для получения размера хранилища в удобном виде
function formatStorageSize(size) {
  const units = ["Bytes", "KB", "MB", "GB"];
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return size.toFixed(2) + " " + units[unitIndex];
}

// Функция для вывода информации о размере занимаемой памяти и общем объеме хранилища
function displayLocalStorageSize() {
  const totalSize = calculateLocalStorageSize();
  const formattedSize = formatStorageSize(totalSize);
  const storageLimit = formatStorageSize(5 * 1024 * 1024); // 5 MB предел хранилища LocalStorage по умолчанию

  console.log(`Объем занимаемой памяти в LocalStorage: ${formattedSize}`);
  console.log(`Общий объем хранилища LocalStorage: ${storageLimit}`);
}

// Функция для сохранения данных в кэше
function saveCache(posts) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("posts", JSON.stringify(posts));
    displayLocalStorageSize();
  }
}
