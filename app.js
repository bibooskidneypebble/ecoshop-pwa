if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log("Funcionou 😎"))
      .catch(() => console.log("Deu ruim 😢"));
  }