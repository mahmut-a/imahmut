const section = document.getElementById("section");

let data = [
  {
    "img_source": "./img/day_1183.png",
    "img_alt": "uidesigndaily.com/posts/sketch-search-filter-components-search-filter-day-1183",
    "title" : "Search - Filter Components",
    "description" : `
      A card design with search and filtering components designed with Figma.
      I got the design from UI Design Daily.
    `,
    "project_source": "https://www.uidesigndaily.com/posts/sketch-search-filter-components-search-filter-day-1183",
    "project_source_name": "Ui Design Daily",
    "source": "./Projects/Day_1183/index.html"
  },
  {
    "img_source": "./img/day_1466.png",
    "img_alt": "groups-list",
    "title" : "Groups List",
    "description" : `
      A card design with some components designed with Figma.
      I got the design from UI Design Daily.
    `,
    "project_source": "https://www.uidesigndaily.com/posts/figma-groups-list-dark-theme-app-day-1466",
    "project_source_name": "Ui Design Daily",
    "source": "./Projects/Day1466/index.html"
  },
  {
    "img_source": "./img/day_1585.png",
    "img_alt": "biling-page",
    "title" : "Billing Page",
    "description" : `
      A card design with some components designed with Figma.
      I got the design from UI Design Daily.
    `,
    "project_source": "https://www.uidesigndaily.com/posts/figma-billing-page-payment-day-1585",
    "project_source_name": "Ui Design Daily",
    "source": "./Projects/Day1585/index.html"
  },
  {
    "img_source": "./img/egghead.png",
    "img_alt": "egghead.io",
    "title" : "egghead.io - An Old Clone",
    "description" : `
      An old clone of egghead.io.
      It was an experience that improved me a lot when I was a beginner.
    `,
    "project_source": "https://www.youtube.com/watch?v=daK8cM_55aE&list=PLfAfrKyDRWrFg0byGVf_uJxyPPumWDSRA&index=2",
    "project_source_name": "Youtube",
    "source": "./Projects/EggHead/index.html"
  }
];


for(let i in data){
  let card = `
    <div class="card">
      <div class="card-img">
        <a href="${data[i].source}">
          <img src="${data[i].img_source}" alt="${data[i].img_alt}">
        </a>
      </div>
      <div class="card-content">
        <div class="title">
          <h2>Title</h2>
          <h3 class="title">
            ${data[i].title}
          </h3>
        </div>
        <div class="description">
          <h2>Description</h2>
          <p class="desc-content">
              ${data[i].description}
          </p>
        </div>
        <div class="source">
          <h2>Source</h2>
          <a href="${data[i].project_source}" target="_blank">
            Visit on ${data[i].project_source_name}
          </a>
        </div>
        <div class="visit-project">
          <a href="${data[i].source}">
            VIEW PROJECT
          </a>
        </div>
      </div>
    </div>
  `;

  section.insertAdjacentHTML("beforeend" , card);
}
