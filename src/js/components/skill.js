const skills = [
  {
    title: 'HTML',
    icon: 'code-view',
    experience: 1,
    percentage: 20,
  },
  {
    title: 'CSS',
    icon: 'code-view',
    experience: 1,
    percentage: 20,
  },
  {
    title: 'JS',
    icon: 'code-view',
    experience: 1,
    percentage: 20,
  },
  {
    title: 'C++',
    icon: 'code-view',
    experience: 3,
    percentage: 50,
  },
  {
    title: 'SQL',
    icon: 'code-view',
    experience: 3,
    percentage: 50,
  },
];

function createContainer() {
  const containerElem = document.createElement('div');
  containerElem.classList.add('list__item');
  return containerElem;
}

function createContent(title, experience) {
  const containerElem = document.createElement('div');
  const titleElem = document.createElement('h3');
  const descriptionElem = document.createElement('p');

  containerElem.classList.add('item__content');
  titleElem.classList.add('content__title');
  descriptionElem.classList.add('content__description');

  titleElem.textContent = title;
  descriptionElem.textContent = `${experience} bulan pengalaman dalam ${title}`;

  containerElem.appendChild(titleElem);
  containerElem.appendChild(descriptionElem);

  return containerElem;
}

function createIcon(icon) {
  const containerElem = document.createElement('div');
  const iconElem = document.createElement('i');

  containerElem.classList.add('item__icon');
  iconElem.classList.add(`ri-${icon}`);

  containerElem.appendChild(iconElem);
  return containerElem;
}

function createProgress(count) {
  const containerElem = document.createElement('span');

  containerElem.classList.add('item__progress');

  count === 100 && (containerElem.style.borderBottomRightRadius = '6px');
  containerElem.style.width = `${count}%`;

  return containerElem;
}

function init() {
  const rootElem = document.querySelector('.skill .skill__list');

  skills.forEach((skill) => {
    const containerElem = createContainer();
    const iconElem = createIcon(skill.icon);
    const contentElem = createContent(skill.title, skill.experience);
    const progressElem = createProgress(skill.percentage);

    containerElem.appendChild(iconElem);
    containerElem.appendChild(contentElem);
    containerElem.appendChild(progressElem);

    rootElem.appendChild(containerElem);
  });
}

export default { init };
