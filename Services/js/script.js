const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

const mail = document.getElementById("mail");
const copy = document.getElementById("copy");

let dataSection1 = [
  {
    "title": "Gmail Login",
    "url" : "https://accounts.google.com/v3/signin/identifier?dsh=S-1123120464%3A1665515810197882&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWqKlVcNW2xTh3moRpfphEGFpcpU_mEmleMJR7juTQSshVqQvLLEBSNsce2aLJ9ynsWhiPoQ",
  },
  {
    "title": "Youtube History",
    "url" : "https://www.youtube.com/feed/history",
  },
  {
    "title": "TDK",
    "url" : "https://sozluk.gov.tr/",
  },
  {
    "title": "Etimoloji Sözlüğü",
    "url" : "https://www.nisanyansozluk.com/",
  },
  {
    "title": "Google Çeviri",
    "url" : "https://translate.google.com/",
  },
  {
    "title": "Youtube Null",
    "url" : "https://youtube.com/c/_NULL_VAL_",
  },
  {
    "title": "Chat GPT",
    "url" : "https://chat.openai.com/auth/login",
  },
  {
    "title": "CodePen New Pen",
    "url" : "https://codepen.io/pen",
  },
  {
    "title": "VS Code Web",
    "url" : "https://vscode.dev/",
  },
  {
    "title": "Physics Simulators",
    "url" : "https://phet.colorado.edu/en/simulations/filter?subjects=physics&type=html,prototype",
  },
  {
    "title": "Periodic Table",
    "url" : "https://periodic-table.tech/",
  },
  {
    "title": "VirusTotal",
    "url" : "https://www.virustotal.com/gui/home/upload",
  },
  {
    "title": "Browserling",
    "url" : "https://www.browserling.com/",
  },
  {
    "title": "Free Books",
    "url" : "https://www.freetechbooks.com/",
  },
];

let dataSection2 = [
  {
    "title": "BU Ders",
    "url" : "http://www.bumatematikozelders.com/altsayfa/tyt_ayt_matematik_ders_videolari.html",
  },
  {
    "title": "OGM Materyal",
    "url" : "https://ogmmateryal.eba.gov.tr/",
  },
  {
    "title": "OGM Soru Bankaları",
    "url" : "https://ogmmateryal.eba.gov.tr/yks-uc-adim",
  },
];

for(let i in dataSection1){
  let card = `        
        <a href="${dataSection1[i].url}" target="_blank">
             ${dataSection1[i].title}
        </a>
  `;

  section1.insertAdjacentHTML("beforeend" , card);
}

for(let i in dataSection2){
  let card = `        
        <a href="${dataSection2[i].url}" target="_blank">
             ${dataSection2[i].title}
        </a>
  `;

  section2.insertAdjacentHTML("beforeend" , card);
}

mail.addEventListener("click", function() {
  // Kopyalanacak metni seç
  var metin = mail.innerText;

  // Metni panoya kopyala
  var textarea = document.createElement("textarea");
  textarea.value = metin;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
});

copy.addEventListener("click", function() {
  // Kopyalanacak metni seç
  var metin = "pass"

  // Metni panoya kopyala
  var textarea = document.createElement("textarea");
  textarea.value = metin;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
});