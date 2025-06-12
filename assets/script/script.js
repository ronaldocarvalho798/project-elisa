const menulinks = document.querySelectorAll('.itens-nav');
 menulinks.forEach(item => {
    item.addEventListener("click", () => {
      menulinks.forEach(i => i.classList.remove("bg-rosa"));
      item.classList.add("bg-rosa");
    })
  })