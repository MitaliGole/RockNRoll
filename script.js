// script.js
async function loadTracks() {
  const res = await fetch('data/tracks.json');
  const data = await res.json();
  return data;
}

function renderCards(items, container) {
  container.innerHTML = items.map(t => `
    <div class="card">
      <img class="cover" src="${t.cover || 'assets/cover.jpg'}" alt="${t.title}">
      <div class="meta">
        <div class="title">${t.title}</div>
        <div class="artist">${t.artist}</div>
        <div class="badge">${t.mood}</div>
      </div>
      <div>
        <a href="lyrics.html#${t.id}" class="badge">Lyrics</a>
      </div>
    </div>
  `).join('');
}

function setUserMood(mood) {
  if (!mood) return localStorage.removeItem('vibe-mood');
  localStorage.setItem('vibe-mood', mood);
}

function getUserMood() {
  return localStorage.getItem('vibe-mood');
}
