import resume from './components/resume.js';
import skill from './components/skill.js';

resume.init();
skill.init();

window.onload = function () {
  const navElem = document.querySelector('.nav');
  const navListItemElem = navElem.querySelectorAll('.nav__list .list__item');
  const sectionElem = document.querySelectorAll('section.content');
  const navigatorElem = document.querySelector('.top');

  navigatorElem.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });

  window.addEventListener('scroll', () => {
    const navPos = window.scrollY + navElem.offsetHeight;
    const sectionPos = [...sectionElem].map(
      (section) => section.offsetTop + section.offsetHeight - navPos,
    );

    const min = Math.min(...sectionPos.filter((pos) => pos > 0));
    const index = sectionPos.findIndex((section) => section === min);

    if (index !== -1) {
      navListItemElem.forEach((item) => {
        item.classList.remove('active');
      });

      navListItemElem[index].classList.add('active');
    }
  });
};
