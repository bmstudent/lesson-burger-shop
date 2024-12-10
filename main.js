let products = document.querySelector("#products");

let data = [
  {
    img: "https://avatars.mds.yandex.net/get-altay/2767250/2a00000176438bb390b0b07f9e3d7cee9070/XXL_height",
    title: "Burger",
    price: "2$",
  },
  {
    img: "https://i.ytimg.com/vi/SW3Y1H_t678/maxresdefault.jpg",
    title: "Burger",
    price: "5$",
  },
  {
    img: "https://distfood.ru/upload/medialibrary/a8b/a8b05c34e3f9b106141ef9724dbe27dd.jpg",
    title: "Burger",
    price: "10$",
  },
  {
    img: "https://don24.ru/uploads/2022/03/%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%BA%D0%B0-r6x-gjza8v28hf0U7-Kv2V8VL-HTHWYC/%D1%88%D0%B0%D1%83%D1%80%D0%BC%D0%B0-NEAB5c4-9Y764xOX8we3G0eMS1p_zPSO.jpg",
    title: "Burger",
    price: "4$",
  },
  {
    img: "https://avatars.dzeninfra.ru/get-zen_doc/9847946/pub_64cb0917ef433f10ac1b18dc_64cb0c32cded7b150ce13e19/scale_1200",
    title: "Burger",
    price: "3$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/5235220/2a0000018086f878f03e2e91a00cde32c8be/XXL_height",
    title: "Burger",
    price: "1$",
  },
];

for (let item of data) {
  products.innerHTML += `
     <article class="border p-2 rounded-lg bg-white">
          <img src="${item.img}" alt="" class="rounded-md w-full h-44 object-cover" />
          <h1 class="text-xl mt-2 font-medium text-gray-900">${item.title}</h1>
          <h2 class="text-blue-500 font-bold text-2xl my-1 ">${item.price}</h2>
          <button class="bg-gray-900 text-white p-2 w-full rounded-md mt-2 active:scale-95 duration-300">Add to cart</button>
      </article>
    `;
}
