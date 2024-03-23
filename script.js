(() => {
  const slideImages = [
    {
      img: "maxi.jpg",
      title: "Tangled",
      description:
        "Akhir cerita, Rapunzel berhasil menghadapi Gothel, sang penyihir jahat yang menyamar sebagai ibunya, dan menemukan kebenaran tentang identitas sejatinya.Kemudian  Rapunzel dan Flynn kembali ke kerajaan, di mana Rapunzel dipersatukan kembali dengan keluarganya, dan mereka hidup bahagia selamanya.",
    },
    {
      img: "anzel.jpg",
      title: "Tangled",
      description:
        "Tangled adalah film animasi Disney yang dirilis pada tahun 2010. Film ini mengisahkan kisah Rapunzel, seorang putri yang terkurung di dalam menara tinggi oleh penyihir jahat bernama Gothel. Rapunzel memiliki rambut panjang yang memiliki kekuatan menyembuhkan yang luar biasa.",
    },
    {
      img: "disneytangled.jpg",
      title: "Rapunzel",
      description:
        "Rapunzel adalah putri dengan rambut emas panjang dalam cerita rakyat Jerman yang diadaptasi menjadi film animasi Tangled (2010) oleh Disney. Rapunzel adalah sosok yang penuh semangat, penasaran, dan berjiwa petualang. Dia juga cerdas dan memiliki keberanian untuk mencari kebenaran serta melawan rintangan. Dia dipenjara di menara oleh penyihir jahat yang menyamar sebagai ibunya. Rapunzel bertemu dengan pencuri bernama Flynn Rider dan bersama-sama mereka berusaha melarikan diri dan menemukan kebebasan serta jati diri mereka.",
    },
    {
      img: "rapunzel.jpg",
      title: "Flynn Rider",
      description:
        "Flynn Rider adalah seorang pencuri tampan yang akhirnya berubah menjadi pendamping setia dan pelindung Rapunzel selama petualangan mereka.",
    },
    {
      img: "rider.jpg",
      title: "Gothel",
      description:
        "Gothel adalah penyihir jahat yang menyamar sebagai ibu Rapunzel. Gothel memenjarakan Rapunzel di menara dan memanfaatkan kekuatan rambut emas Rapunzel untuk menjaga kekuasaannya. Dia manipulatif, egois, dan tidak segan menggunakan kejahatan untuk mencapai tujuannya.",
    },
    {
      img: "ibu.jpg",
      title: "Maximus & Pascal",
      description:
        "Maximus adalah seekor kuda penjaga kerajaan yang bertekad menangkap Flynn Rider, sementara Pascal adalah seekor kameleon yang menjadi sahabat Rapunzel. Meskipun Maximus awalnya memandang Flynn sebagai musuh, dia akhirnya berubah menjadi sekutu yang setia dalam petualangan mereka. Pascal, dengan kepribadiannya yang lucu dan penyayang, memberikan dukungan moral kepada Rapunzel dan merupakan sahabat yang setia bagi gadis itu. Kehadiran Maximus dan Pascal memberikan warna dan keceriaan dalam perjalanan yang seru dan berbahaya yang dialami oleh para tokoh utama.",
    },
  ];

  const createHtmlStructure = (sliderSelector, images) => {
    const parent = document.querySelector(sliderSelector, images);

    // Slides
    images.forEach((slideImg, index) => {
      const { img, title, description } = slideImg;
      const slideItem = `
      <div
        class="item"
        style="background-image: url('${img}')"
        data-attribute="${index}"
      >
        <div class="content">
          <div class="name">${title}</div>
          <div class="description">${description}</div>
        </div>
      </div>
      `;
      const divFragment = document
        .createRange()
        .createContextualFragment(slideItem);
      parent.appendChild(divFragment);
    });

    // Buttons
    const html = `
    <div class="buttons">
      <button class="prev"> Prev</button>
      <button class="next"> Next</button>
    </div>
    `;
    const fragment = document.createRange().createContextualFragment(html);
    parent.parentElement.appendChild(fragment);
  };

  // Initializations
  createHtmlStructure(".slider", slideImages);

  // References
  const $slider = document.querySelector(".slider");
  const $next = document.querySelector(".next");
  const $prev = document.querySelector(".prev");

  // Listeners
  $next.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    $slider.appendChild(items[0]);
  });

  $prev.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    $slider.prepend(items[items.length - 1]);
  });
})();
