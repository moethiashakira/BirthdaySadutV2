// UPDATED COUNTS OBJECT (rose -> sunflower)
const counts = {
  sunflower: 0,
  tulip: 0,
  daisy: 0,
  neon: 0 
};

function addFlower(type) {
  const container = document.getElementById("flower-container");
  
  // UPDATED UI UPDATE LOGIC (rose-count -> sunflower-count)
  counts[type]++;
  document.getElementById(`${type}-count`).innerText = counts[type];

  const angle = (Math.random() * 70) - 35; 
  const height = 250 + Math.random() * 130; 
  
  const stem = document.createElement("div");
  stem.className = "stem";
  stem.style.setProperty("--angle", `${angle}deg`);
  stem.style.transform = `rotate(${angle}deg)`;
  stem.style.height = `${height}px`;
  stem.style.zIndex = Math.floor(Math.random() * 20); 

  const delay = Math.random() * 2;
  const duration = 3 + Math.random() * 2;
  stem.style.animation = `sway ${duration}s ease-in-out ${delay}s infinite`;

  const flower = document.createElement("div");
  flower.className = `flower ${type}`;

  if (type === 'daisy') {
    const center = document.createElement("div");
    center.className = "center";
    flower.appendChild(center);
    for (let i = 0; i < 8; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.transform = `rotate(${(360 / 8) * i}deg)`;
      flower.appendChild(petal);
    }
  } 
  else if (type === 'tulip') {
    for (let i = 0; i < 4; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      flower.appendChild(petal);
    }
  }
  else if (type === 'sunflower') {
    // NEW SUNFLOWER LOGIC (multi-petals + center)
    const center = document.createElement("div");
    center.className = "center";
    flower.appendChild(center);

    const petalCount = 20; // Give it 20 petals
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.transform = `rotate(${(360 / petalCount) * i}deg)`;
      flower.appendChild(petal);
    }
  }
  else if (type === 'neon') {
    const center = document.createElement("div");
    center.className = "center";
    flower.appendChild(center);
    for (let i = 0; i < 6; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.transform = `rotate(${(360 / 6) * i}deg)`;
      flower.appendChild(petal);
    }
  }

  stem.appendChild(flower);
  container.appendChild(stem);
}

function finishBouquet() {
  document.getElementById('builder-panel').classList.add('hidden');
  
  const resultPanel = document.getElementById('result-panel');
  resultPanel.classList.remove('hidden');
  resultPanel.classList.add('fade-in');
  
  // UPDATED SUMMARY TEXT (Rose -> Sunflower)
  const summaryText = `${counts.sunflower} Sunflowers, ${counts.tulip} Tulips, ${counts.daisy} Daisies, & ${counts.neon} Roses.`;
  document.getElementById('bouquet-summary').innerText = summaryText;

  document.getElementById('main-scene').classList.add('zoomed');
}

// Optional: Add a few starter flowers immediately
// Add exactly 1 of each flower when the page loads
document.addEventListener("DOMContentLoaded", () => {
  addFlower('sunflower');
  addFlower('tulip');
  addFlower('daisy');
  addFlower('neon');
});