// js/members.js
import { committees } from 'members.js';

function createMemberCard(m) {
  const div = document.createElement('div');
  div.className = 'member';

  div.innerHTML = `
    <img src="../images/lst/${m.img}" alt="${m.imgAlt}">
    <p class="role">${m.roleZh} ${m.roleEn}</p>
    <p class="name">
      ${ m.email
         ? `<a href="mailto:${m.email}" style="color:#fff;background:transparent">${m.nameZh}</a>`
         : m.nameZh
      }
    </p>
    ${ m.desc.map(d => `<p class="description">${d}</p>`).join('') }
  `;
  return div;
}

function renderCommittee(c) {
  const section = document.createElement('div');
  section.id = c.id;
  section.className = 'mc';

  section.innerHTML = `
    <h1>${c.titleZh} ${c.titleEn}</h1>
    <p style="color:${c.color}">${c.period}</p>
    <div class="members-grid"></div>
  `;

  const grid = section.querySelector('.members-grid');
  c.members.forEach(m => grid.appendChild(createMemberCard(m)));
  return section;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('main .content');
  committees.forEach(c => {
    container.appendChild(renderCommittee(c));
    // if you want a divider between each:
    if (c !== committees[committees.length - 1]) {
      const divider = document.createElement('div');
      divider.className = 'divider-bar';
      container.appendChild(divider);
    }
  });

  // final “to be continued”
  const cont = document.createElement('div');
  cont.innerHTML = `<h1>待補充 To be continue…</h1>`;
  container.appendChild(cont);
});
