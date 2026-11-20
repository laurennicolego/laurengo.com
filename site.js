const resumeFile = "assets/lauren-go-resume.pdf";
const headshot = "assets/lauren-go-headshot.jpeg";

function photo(id, title, alt, credit = "") {
  return { id, title, alt, credit, src: `assets/${id}.webp`, thumb: `assets/${id}-small.webp` };
}

const productions = [
  {
    id: "kodachrome",
    title: "Kodachrome",
    role: "Photographer (Suzanne)",
    company: "Technically Thespians",
    direction: "Jake Mattinson",
    photoNote: "A landscape production photo, with you clearly in the frame.",
    photos: [
      photo("kodachrome-02", "Kodachrome / Photographer (Suzanne)", "Suzanne with her camera in Kodachrome"),
      photo("kodachrome-12", "Kodachrome / Photographer (Suzanne)", "Suzanne gesturing with her camera beside a scene partner"),
      photo("kodachrome-13", "Kodachrome / Photographer (Suzanne)", "Suzanne sharing a moment with a scene partner"),
      photo("kodachrome-6987", "Kodachrome / Photographer (Suzanne)", "A quiet dramatic moment on the Kodachrome set"),
      photo("kodachrome-37", "Kodachrome / Photographer (Suzanne)", "A dramatic embrace in Kodachrome, photographed in black and white"),
    ],
    review: {
      quotes: [
        "Lauren Go delivers an achingly layered, deeply compelling performance as Suzanne &hellip; [she] carries the emotional architecture of the entire play on her shoulders. &hellip; with a quiet authority that never overreaches.",
        "There is something deeply moving about watching Lauren navigate those moments of recognition and revelation &hellip;",
      ],
      author: "Sameer Arshad",
      publication: "The Sound on Stage",
      date: "April 25, 2026",
      url: "https://www.thesoundonstage.org/stage-reviews/stage-review-kodachrome-technically-thespians",
    },
  },
  {
    id: "that-was-shakespeare",
    title: "That Was Shakespeare",
    context: "Minnesota Fringe",
    role: "Beatrice",
    company: "Technically Thespians",
    direction: "Jake Mattinson & Erica Guthan",
    photoNote: "A performance photo from the Minnesota Fringe production.",
    photos: [
      photo("fringe-22", "That Was Shakespeare / Beatrice", "Beatrice and her scene partner in a dramatic embrace"),
      photo("fringe-24", "That Was Shakespeare / Beatrice", "Beatrice in an animated scene with her scene partner"),
      photo("fringe-23", "That Was Shakespeare / Beatrice", "An intimate two-shot of Beatrice and her scene partner"),
    ],
    review: {
      quote: "Shout out to the young women doing Beatrice &hellip; she was excellent. they get an extra .5 kitty just for her!",
      author: "Kelly Smeltzer",
      publication: "Minnesota Fringe audience review",
    },
  },
  {
    id: "love-and-misdirection",
    title: "Love & Misdirection",
    role: "Beatrice; Helena",
    company: "Technically Thespians",
    direction: "Erica Guthan & Jason Davis",
    photoNote: "A production photo showing Beatrice or Helena in performance.",
    photos: [
      photo("love-helena-11", "Love & Misdirection / Helena", "Helena raising both hands as the other lovers react around her"),
      photo("love-helena-04", "Love & Misdirection / Helena", "Helena speaking with one finger raised against the woodland set"),
      photo("love-helena-12", "Love & Misdirection / Helena", "Helena confronting her scene partner with a finger near her chin"),
      photo("love-beatrice-14", "Love & Misdirection / Beatrice", "Beatrice embracing another character as the ensemble stands around them"),
      photo("love-beatrice-13", "Love & Misdirection / Beatrice", "Beatrice giving her scene partner a skeptical sideways look"),
    ],
    review: {
      quote: "Lauren, what a star. &hellip; She was <em>so</em> good.",
      author: "Drizzle and Drama podcast",
      publication: "Season 1, Episode 6 / Listen at 14:22",
      date: "October 27, 2026",
      url: "https://www.youtube.com/watch?v=7WadQmigs_U&t=862s",
    },
  },
];

const galleryExtras = [
  photo("kodachrome-03", "Kodachrome / Photographer (Suzanne)", "Suzanne looking down at her camera against a blue stage backdrop"),
  photo("kodachrome-52", "Kodachrome / Photographer (Suzanne)", "A scene with flowers and an expressive gesture in Kodachrome"),
  photo("kodachrome-6908", "Kodachrome / Photographer (Suzanne)", "An intimate two-shot from Kodachrome"),
  photo("kodachrome-6998", "Kodachrome / Photographer (Suzanne)", "A playful moment between two characters holding hands in Kodachrome"),
  photo("kodachrome-6755", "Kodachrome / Photographer (Suzanne)", "A quiet moment between Suzanne and her scene partner"),
  photo("kodachrome-6901-crop", "Kodachrome / Photographer (Suzanne)", "Suzanne and her scene partner in an intimate confrontation"),
  photo("kodachrome-6902", "Kodachrome / Photographer (Suzanne)", "Another moment in the intimate Kodachrome scene"),
  photo("kodachrome-6903", "Kodachrome / Photographer (Suzanne)", "Suzanne and her scene partner beneath the projected scenery"),
  photo("kodachrome-6970", "Kodachrome / Photographer (Suzanne)", "Suzanne and her scene partner on the Kodachrome set"),
  photo("kodachrome-7000", "Kodachrome / Photographer (Suzanne)", "An intimate moment beside the counter in Kodachrome"),
  photo("kodachrome-7001", "Kodachrome / Photographer (Suzanne)", "Another view of the intimate counter scene in Kodachrome"),
  photo("kodachrome-poster-01", "Kodachrome / Production artwork", "Kodachrome poster featuring Suzanne with a camera, framed by a filmstrip"),
  photo("kodachrome-poster-06", "Kodachrome / Production artwork", "Kodachrome poster featuring an intimate two-person portrait, framed by a filmstrip"),
];
const kodachromeGalleryPhotos = [...productions[0].photos, ...galleryExtras];
const kodachromePreviewIds = ["kodachrome-02", "kodachrome-13", "kodachrome-6987", "kodachrome-37", "kodachrome-52", "kodachrome-6902"];
const galleryGroups = [
  {
    id: "kodachrome",
    title: "Kodachrome",
    photos: [
      ...kodachromePreviewIds.map((id) => kodachromeGalleryPhotos.find((image) => image.id === id)),
      ...kodachromeGalleryPhotos.filter((image) => !kodachromePreviewIds.includes(image.id)),
    ],
  },
  {
    id: "that-was-shakespeare",
    title: "That Was Shakespeare / Minnesota Fringe",
    photos: [
      ...productions[1].photos,
      photo("fringe-25", "That Was Shakespeare / Beatrice", "A wide view of a romantic scene in That Was Shakespeare"),
    ],
  },
  {
    id: "love-and-misdirection",
    title: "Love & Misdirection",
    photos: [
      productions[2].photos[0],
      photo("love-helena-07", "Love & Misdirection / Helena", "Helena leaning toward her kneeling scene partner with an open-handed gesture"),
      productions[2].photos[2],
      photo("love-beatrice-01", "Love & Misdirection / Beatrice", "Beatrice reacting with an animated expression beside a scene partner wearing a hat"),
      productions[2].photos[3],
      productions[2].photos[4],
      photo("love-beatrice-08", "Love & Misdirection / Beatrice", "Beatrice in an urgent exchange, holding her scene partner's hand"),
      photo("love-beatrice-02", "Love & Misdirection / Beatrice", "Beatrice standing beside a tree and looking to the side"),
      photo("love-beatrice-03", "Love & Misdirection / Beatrice", "Beatrice sharing a moment with two scene partners"),
      photo("love-beatrice-04", "Love & Misdirection / Beatrice", "Beatrice looking down at her open hand beside a scene partner"),
      photo("love-beatrice-06", "Love & Misdirection / Beatrice", "Beatrice leaning out from behind foliage with a concerned expression"),
      photo("love-beatrice-09", "Love & Misdirection / Beatrice", "Beatrice reaching toward her scene partner's face"),
      photo("love-beatrice-12", "Love & Misdirection / Beatrice", "Beatrice leaning back into an embrace with her scene partner"),
      productions[2].photos[1],
      photo("love-helena-05", "Love & Misdirection / Helena", "Helena addressing a scene partner in a tan jacket"),
      photo("love-helena-06", "Love & Misdirection / Helena", "Helena and her scene partner kneeling on the woodland stage"),
      photo("love-helena-08", "Love & Misdirection / Helena", "Helena holding hands with a scene partner as another performer reacts behind them"),
      photo("love-helena-09", "Love & Misdirection / Helena", "Helena and her scene partner holding hands in an intense exchange"),
      photo("love-helena-10", "Love & Misdirection / Helena", "Helena gesturing toward two scene partners in the woodland setting"),
    ],
  },
  {
    id: "that-was-shakespeare-full",
    title: "That Was Shakespeare / Full-length",
    photos: [
      photo("shakespeare-full-hamlet", "That Was Shakespeare / Hamlet", "Hamlet leaning forward and looking to the side"),
      photo("shakespeare-full-74", "That Was Shakespeare / Hamlet", "Hamlet speaking with a hand held against the chest"),
      photo("shakespeare-full-macduff", "That Was Shakespeare / Macduff", "Macduff speaking with arms outstretched in a black leather jacket"),
      photo("shakespeare-full-94", "That Was Shakespeare / Macduff", "Macduff in an expressive two-person scene with both performers in leather jackets"),
    ],
  },
  {
    id: "all-the-worlds-a-song",
    title: "All the World's a Song",
    photos: [
      photo("song-60", "All the World's a Song / Juliet", "Juliet grieving over Romeo with the orchestra behind them"),
      photo("song-37", "All the World's a Song / Juliet", "Juliet leaning against Romeo while wearing a red shawl"),
      photo("song-58", "All the World's a Song / Juliet", "Juliet kneeling beside Romeo with her hands raised toward her face"),
      photo("song-49", "All the World's a Song / Juliet", "Juliet lying onstage as Romeo kneels beside her"),
      photo("song-9037", "All the World's a Song / Juliet", "Juliet touching Romeo's face in a black-and-white performance photograph"),
    ],
  },
];
const credits = [
  ["Kodachrome", "Photographer (Suzanne)", "Technically Thespians", "Jake Mattinson"],
  ["Almost, Maine", "Gayle; Villian (Waitress)", "The Mechanicals (Singapore/Manila)", "Kevin Lagrange"],
  ["Love & Misdirection", "Beatrice; Helena", "Technically Thespians", "Erica Guthan, Jason Davis"],
  ["That Was Shakespeare", "Beatrice", "Technically Thespians", "Jake Mattinson, Erica Guthan", "Minnesota Fringe / 60-min. abridged"],
  ["That Was Shakespeare", "Hamlet; Macduff", "Technically Thespians", "Jake Mattinson", "Full-length"],
  ["All the World's a Song", "Juliet", "Technically Thespians + Redmond Tech Orchestra", "Monica Taylor"],
  ["Macbeth", "Macduff", "Tufts University", "Sam Tempchin"],
  ["Tufts Traveling Treasure Trunk", "Company Member (4 years)", "Touring Children's Theatre / Tufts University", ""],
];

function header() {
  return `
    <header class="site-header page-width">
      <a class="wordmark" href="index.html" aria-label="Lauren Go home">LG<span class="wordmark-dot">.</span></a>
      <nav aria-label="Main navigation">
        <a href="#work">On stage</a>
        <a href="#resume">R&eacute;sum&eacute;</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>`;
}

function hero() {
  return `
    <section class="performance-hero page-width" aria-labelledby="name">
      <div class="performance-intro">
        <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Actor / Greater Seattle</p>
        <h1 id="name">LAUREN<br><span>GO.</span></h1>
        <div class="performance-intro-bottom">
          <a class="square-link" href="#work" aria-label="Explore selected work">&darr;</a>
        </div>
      </div>
      <figure class="hero-portrait">
        <img src="${headshot}" alt="Lauren Go wearing an olive jacket against a light background" width="1160" height="1450" fetchpriority="high">
        <figcaption><span>Lauren Go / Portrait</span><a href="${headshot}" download="Lauren-Go-Headshot.jpeg">Download <span aria-hidden="true">&darr;</span></a></figcaption>
      </figure>
      <div class="performance-hero-foot"><a href="${resumeFile}" download="Lauren-Go-Resume.pdf">Download r&eacute;sum&eacute; <span aria-hidden="true">&nearr;</span></a></div>
    </section>`;
}

function carousel(production) {
  if (!production.photos?.length) {
    return `
      <div class="photo-reservation" aria-label="Space reserved for a ${production.title} production photograph">
        <span class="placeholder-label">Production photograph</span>
        <div class="photo-reservation-center"><span class="frame-mark" aria-hidden="true"></span><p>${production.photoNote}</p></div>
        <span class="placeholder-footer">Photo to be supplied <span aria-hidden="true">+</span></span>
      </div>`;
  }
  const first = production.photos[0];
  return `
    <div class="photo-carousel" role="region" aria-roledescription="carousel" aria-label="${production.title} photos" data-production="${production.id}">
      <figure>
        <button class="carousel-image image-open" type="button" aria-label="Enlarge ${first.alt}" data-photo="${first.id}">
          <img src="${first.src}" alt="${first.alt}" width="1600" height="1067" loading="lazy">
          <span class="image-enlarge" aria-hidden="true">&nearr;</span>
        </button>
        <figcaption class="carousel-caption">${first.title}${first.credit ? ` / ${first.credit}` : ""}</figcaption>
      </figure>
      <div class="carousel-controls">
        <span class="carousel-status" aria-live="polite" aria-atomic="true">1 of ${production.photos.length}</span>
        <div><button type="button" data-step="-1" aria-label="Previous ${production.title} photo">&larr;</button><button type="button" data-step="1" aria-label="Next ${production.title} photo">&rarr;</button></div>
      </div>
    </div>`;
}

function selectedWork() {
  return `
    <section id="work" class="selected-work section-space" aria-labelledby="work-heading">
      <div class="section-heading page-width">
        <div><h2 id="work-heading">On stage</h2></div>
      </div>
      <div class="production-list page-width">
        ${productions.map((production) => `
          <article class="production" id="${production.id}" aria-labelledby="${production.id}-heading">
            <div class="production-heading">
              <div><h3 id="${production.id}-heading">${production.title}</h3>${production.context ? `<p class="production-context">${production.context}</p>` : ""}</div>
              <p class="production-role">${production.role}</p>
            </div>
            <div class="production-body">
              ${carousel(production)}
              <div class="production-details">
                <div class="production-facts"><p>${production.company}</p><p class="muted">Directed by ${production.direction}</p></div>
                ${production.review ? `
                <figure class="review">
                  ${(production.review.quotes || [production.review.quote]).map((quote) => `<blockquote${production.review.url ? ` cite="${production.review.url}"` : ""}><p class="quote-note">&ldquo;${quote}&rdquo;</p></blockquote>`).join("")}
                  <figcaption class="quote-source">${production.review.author}<br><cite>${production.review.url ? `<a href="${production.review.url}">${production.review.publication}</a>` : production.review.publication}</cite>${production.review.date ? `<span class="quote-date">${production.review.date}</span>` : ""}</figcaption>
                </figure>` : `
                <aside class="quote-reservation" aria-label="Planned review placement">
                  <p class="eyebrow">Review placement</p>
                  <p class="quote-note">${production.quoteNote}</p>
                  <p class="quote-source">Reviewer / publication or podcast<br>Original review link &middot; timestamp if audio</p>
                </aside>`}
              </div>
            </div>
          </article>`).join("")}
      </div>
    </section>`;
}

function gallery() {
  return `
    <section id="gallery" class="gallery-section section-space" aria-labelledby="gallery-heading">
      <div class="page-width">
        <div class="section-heading"><h2 id="gallery-heading">Gallery</h2></div>
        ${galleryGroups.map((group) => `
          <section class="gallery-group" data-gallery="${group.id}" aria-labelledby="gallery-${group.id}-heading">
            <h3 id="gallery-${group.id}-heading">${group.title}</h3>
            <div class="gallery-grid" id="gallery-${group.id}-photos">
              ${group.photos.map((image, index) => `
                <figure class="gallery-item"${index >= 6 ? " hidden" : ""}>
                  <button class="image-open" type="button" data-photo="${image.id}" aria-label="Enlarge ${image.alt}">
                    <img src="${image.thumb}" alt="${image.alt}" width="640" height="480" loading="lazy">
                    <span class="image-enlarge" aria-hidden="true">&nearr;</span>
                  </button>
                  <figcaption>${image.title}${image.credit ? ` / ${image.credit}` : ""}</figcaption>
                </figure>`).join("")}
            </div>
            ${group.photos.length > 6 ? `<button class="gallery-toggle" type="button" aria-expanded="false" aria-controls="gallery-${group.id}-photos" data-gallery-toggle>Show ${group.photos.length - 6} more photos <span aria-hidden="true">+</span></button>` : ""}
          </section>`).join("")}
      </div>
    </section>
    <dialog class="photo-viewer" aria-label="Production photo viewer">
      <div class="viewer-toolbar"><span class="viewer-status" aria-live="polite" aria-atomic="true"></span><button class="viewer-close" type="button" aria-label="Close photo viewer">Close &times;</button></div>
      <figure><div class="viewer-image"><img alt=""></div><figcaption></figcaption></figure>
      <div class="viewer-controls"><button type="button" data-step="-1" aria-label="Previous photo">&larr;</button><button type="button" data-step="1" aria-label="Next photo">&rarr;</button></div>
    </dialog>`;
}

function resume() {
  return `
    <section id="resume" class="resume-section section-space" aria-labelledby="resume-heading">
      <div class="page-width">
        <div class="section-heading">
          <div><h2 id="resume-heading">R&eacute;sum&eacute;</h2></div>
          <a class="download-link" href="${resumeFile}" download="Lauren-Go-Resume.pdf">Download PDF <span aria-hidden="true">&darr;</span></a>
        </div>
        <div class="actor-details"><span>Greater Seattle Area</span><span>she/her</span><span>5&prime;6&Prime;</span><span>Non-Union</span></div>
        <h3 class="resume-category">Theatre</h3>
        <div class="credits-table-wrap">
          <table class="credits-table">
            <caption class="sr-only">Lauren Go's theatre credits, roles, companies, and directors</caption>
            <thead><tr><th scope="col">Production</th><th scope="col">Role</th><th scope="col">Company / Director</th></tr></thead>
            <tbody>${credits.map(([title, role, company, director, context]) => `
              <tr><th scope="row">${title}${context ? `<span class="credit-context">${context}</span>` : ""}</th><td data-label="Role">${role}</td><td data-label="Company / Director">${company}${director ? `<span class="credit-director">dir. ${director}</span>` : ""}</td></tr>`).join("")}</tbody>
          </table>
        </div>
        <div class="training-grid">
          <div><h3 class="resume-category">Education &amp; training</h3><p><strong>B.A. in Dramatic Arts</strong><br>Tufts University</p><p>Selected acting coursework: Acting and Shakespeare<br>Tufts University</p><p>Voice &mdash; Private study, including Dan Smith</p></div>
          <div><h3 class="resume-category">Special skills</h3><ul class="skills-list"><li>British dialect (general)</li><li>Soprano II</li><li>French and Tagalog (basic conversational)</li></ul></div>
        </div>
      </div>
    </section>`;
}

function footer() {
  return `
    <footer id="contact" class="contact-section">
      <div class="page-width">
        <p class="eyebrow">Contact</p>
        <div class="contact-main"><h2>LET'S TALK</h2><a class="contact-email" href="mailto:lauren.nicole.go@gmail.com">lauren.nicole.go@gmail.com</a></div>
        <div class="footer-bottom"><span>Lauren Go &middot; Actor &middot; Greater Seattle</span><a href="#main">Back to top <span aria-hidden="true">&uarr;</span></a></div>
      </div>
    </footer>`;
}

document.querySelector("#site").innerHTML = `${header()}<main id="main">${hero()}${selectedWork()}${resume()}${gallery()}</main>${footer()}`;

document.querySelectorAll("[data-gallery-toggle]").forEach((button) => {
  const extraPhotos = [...button.closest(".gallery-group").querySelectorAll(".gallery-item")].slice(6);
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") !== "true";
    extraPhotos.forEach((image) => { image.hidden = !expanded; });
    button.setAttribute("aria-expanded", String(expanded));
    button.innerHTML = expanded
      ? 'Show fewer photos <span aria-hidden="true">&minus;</span>'
      : `Show ${extraPhotos.length} more photos <span aria-hidden="true">+</span>`;
    if (!expanded) button.scrollIntoView({ block: "nearest", behavior: "instant" });
  });
});

function enableSwipe(element, navigate) {
  let start;
  let suppressClick = false;
  element.addEventListener("pointerdown", (event) => {
    start = event.isPrimary && event.pointerType !== "mouse" ? { x: event.clientX, y: event.clientY } : undefined;
    suppressClick = false;
  });
  element.addEventListener("pointerup", (event) => {
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    start = undefined;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      suppressClick = true;
      navigate(dx < 0 ? 1 : -1);
    }
  });
  element.addEventListener("pointercancel", () => { start = undefined; });
  element.addEventListener("click", (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }, true);
}

document.querySelectorAll(".photo-carousel").forEach((element) => {
  const photos = productions.find((production) => production.id === element.dataset.production).photos;
  let current = 0;
  function navigate(step) {
    current = (current + step + photos.length) % photos.length;
    const image = photos[current];
    const button = element.querySelector(".image-open");
    const img = button.querySelector("img");
    img.src = image.src;
    img.alt = image.alt;
    button.dataset.photo = image.id;
    button.setAttribute("aria-label", `Enlarge ${image.alt}`);
    element.querySelector(".carousel-caption").textContent = image.title + (image.credit ? ` / ${image.credit}` : "");
    element.querySelector(".carousel-status").textContent = `${current + 1} of ${photos.length}`;
  }
  element.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => navigate(Number(button.dataset.step)));
  });
  element.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    navigate(event.key === "ArrowRight" ? 1 : -1);
  });
  enableSwipe(element.querySelector(".carousel-image"), navigate);
});

const viewer = document.querySelector(".photo-viewer");
let viewerPhotos = [];
let viewerIndex = 0;
function showPhoto(step = 0) {
  viewerIndex = (viewerIndex + step + viewerPhotos.length) % viewerPhotos.length;
  const image = viewerPhotos[viewerIndex];
  const img = viewer.querySelector("img");
  img.src = image.src;
  img.alt = image.alt;
  viewer.querySelector("figcaption").textContent = image.title + (image.credit ? ` / ${image.credit}` : "");
  viewer.querySelector(".viewer-status").textContent = `${viewerIndex + 1} of ${viewerPhotos.length}`;
}
document.querySelectorAll(".image-open").forEach((button) => {
  button.addEventListener("click", () => {
    const carouselElement = button.closest(".photo-carousel");
    viewerPhotos = carouselElement
      ? productions.find((production) => production.id === carouselElement.dataset.production).photos
      : galleryGroups.find((group) => group.id === button.closest(".gallery-group").dataset.gallery).photos;
    viewerIndex = viewerPhotos.findIndex((image) => image.id === button.dataset.photo);
    showPhoto();
    viewer.showModal();
    document.body.classList.add("viewer-open");
  });
});
viewer.querySelector(".viewer-close").addEventListener("click", () => viewer.close());
viewer.addEventListener("close", () => document.body.classList.remove("viewer-open"));
viewer.addEventListener("click", (event) => { if (event.target === viewer) viewer.close(); });
viewer.querySelectorAll("[data-step]").forEach((button) => {
  button.addEventListener("click", () => showPhoto(Number(button.dataset.step)));
});
viewer.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  showPhoto(event.key === "ArrowRight" ? 1 : -1);
});
enableSwipe(viewer.querySelector(".viewer-image"), showPhoto);
