// <div class="timeline__item">
//   <h3 class="item__title">SD Negeri 3 Banjar Anyar</h3>
//   <p class="item__description">Masuk tahun 2009, Lulus tahun 2015</p>
// </div>

const resumes = [
  {
    title: 'SD Negeri 3 Banjar Anyar',
    year: {
      start: 2009,
      end: 2015,
    },
  },
  {
    title: 'SMP Negeri 1 Tabanan',
    year: { start: 2015, end: 2018 },
  },
  {
    title: 'SMA Negeri 2 Tabanan',
    year: { start: 2018, end: 2021 },
  },
  {
    title: 'ITB STIKOM Bali',
    year: { start: 2021, end: null },
  },
];

function createContainer() {
  const containerElem = document.createElement('div');
  containerElem.classList.add('timeline__item');
  return containerElem;
}

function createContent(title, year) {
  const titleElem = document.createElement('h3');
  const descriptionElem = document.createElement('p');

  titleElem.classList.add('item__title');
  descriptionElem.classList.add('item__description');

  titleElem.textContent = title;
  descriptionElem.textContent = `Masuk tahun ${year.start}, ${
    year.end ? `Lulus tahun ${year.end}` : 'Sampai sekarang'
  }`;

  return [titleElem, descriptionElem];
}

function init() {
  const rootElem = document.querySelector('.resume .resume__timeline');

  resumes.forEach((resume) => {
    const containerElem = createContainer();
    const [titleElem, descriptionElem] = createContent(resume.title, resume.year);

    containerElem.appendChild(titleElem);
    containerElem.appendChild(descriptionElem);

    rootElem.appendChild(containerElem);
  });
}

export default { init };
