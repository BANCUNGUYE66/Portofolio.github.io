const humburger = document.querySelector('.humburger_menu');
const navBar = document.querySelector('.menu');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navBar.classList.toggle('active');
});

document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navBar.classList.remove('active')
}));

const modalContainer = document.querySelector('#pop_up_window');

const objects = [
  {
    id: 'card_id_1',
    projectName: 'Tonic',
    detailsOne: 'CANOPY',
    detailsTwo: 'End Dev',
    year: '2015',
    image: 'images/Snapshoot_Portfolio2.svg',
    alt: 'image',
    paragraphShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: 'http:/about.html',
    sourceLink: '#',
  },
  {
    id: 'card_id_2',
    projectName: 'Tonic',
    detailsOne: 'CANOPY',
    detailsTwo: 'End Dev',
    year: '2015',
    image: 'images/Snapshoot_Portfolio@2x.png',
    alt: 'image',
    paragraphShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: 'http:/about.html',
    sourceLink: '#',
  },
  {
    id: 'card_id_3',
    projectName: 'Tonic',
    detailsOne: 'CANOPY',
    detailsTwo: 'End Dev',
    year: '2015',
    image: 'images/Snapshoot_Portfolio.svg',
    alt: 'image',
    paragraphShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: 'http:/about.html',
    sourceLink: '#',
  },
  {
    id: 'card_id_4',
    projectName: 'Tonic',
    detailsOne: 'CANOPY',
    detailsTwo: 'End Dev',
    year: '2015',
    image: 'images/Snapshoot_Portfolio.png',
    alt: 'image',
    paragraphShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: 'http:/about.html',
    sourceLink: '#',
  },
];

function getmyTemplate(tools) {
  let toolsContent = '';
  tools.forEach((tool) => {
    toolsContent += `
         <li>${tool}
        `;
  });
  return toolsContent;
}
function popupModal(object) {
  const popModalContents = `
     <div class="popup-background"></div>
        <div class="popup-card-1">
            <div class="pop_cancel">
                <div class="tonic_head">
                     <h2>${object.projectName}</h2>
                </div>
                <button class="icon">
                     <i class="fa-duotone fa-x"></i>
                </button>
            </div>
            <div class="year">
                <ul>
                    <li class="canopy">${object.detailsOne}</li>
                    <li>${object.detailsTwo}</li>
                    <li>${object.year}</li>
                </ul>
            </div>
            <div class="pop_card_one_image">
                <img src="${object.image}" alt="${object.alt}" />
            </div>
            <div class="pop_desktop_paragraph">
                <p class="pop_paragraph">
                    ${object.description}
                </p>

                <div class="pop_desktop_btn">
                   <div class="pop_skills_button">
                       <ul class="first_button">
                          ${getmyTemplate(object.tools)}
                        </ul>
                        <ul class="second_button">
                         ${getmyTemplate(object.toolsTwo)}
                        </ul>
                    </div>
                    <div class="popup_button">
                      <button class="live-btn">See live<img src="" alt=""/></button>
                      <button class="source-btn">See source <img src="" alt=""/></button>
                    </div>
                </div>
            </div>
        </div>

    `;
  return popModalContents;
}

function loadProjectsCards(objects = []) {
  let cardContent = '';

  objects.forEach((object) => {
    cardContent += `
                
                  <div class="card_one">
                     <div class="card_one_image">
                         <img src="${object.image}" alt="${object.alt}" />
                     </div>
                     <div class="card_one_text">
                         <h2>${object.projectName}</h2>
                         <div class="list2015">
                             <ul>
                                 <li class="canopy">${object.detailsOne}</li>
                                 <li>${object.detailsTwo}</li>
                                 <li>${object.year}</li>
                             </ul>
                         </div>
                         <div class="paragraph">
                              <p>${object.paragraphShort}</p> 
                         </div>
                         <div class="skills_button">
                              <ul>
                                ${getmyTemplate(object.tools)}
                              </ul>
                         </div>
                         <div class="Project_button">
                             <button data-project-id="${object.id}" id="see_project_button">See Project</button>
                         </div>
                     </div>
                </div>
            `;
  });
  return cardContent;
}

function closePopUp() {
  modalContainer.style.display = 'none';
}
function openPopUp(object) {
  const popUpTemplate = popupModal(object);
  modalContainer.innerHTML = popUpTemplate;
  modalContainer.style.display = 'block';

  const popUpCloseButton = document.querySelector('.icon');

  popUpCloseButton.addEventListener('click', closePopUp);
}

window.addEventListener('load', () => {
  const portfolioSection = document.querySelector('#work');
  modalContainer.style.display = 'none';

  portfolioSection.innerHTML = loadProjectsCards(objects);
  const projectButtons = document.querySelectorAll('#see_project_button');
  Array.from(projectButtons).forEach((element) => {
    element.addEventListener('click', () => {
      const projectID = element.getAttribute('data-project-id');
      const projectObj = objects.find((object) => object.id === projectID);
      openPopUp(projectObj);
    });
  });
});

const email = document.getElementById('email')

document.querySelector('#contact_button').addEventListener('click', (e) => {
  const name = document.getElementById('name');
  if (!name.validity.valid) {
    document.getElementById('alertmessage').innerHTML = 'Name field is empty!';
    e.preventDefault();
    return;
  }
  if (email.validity.typeMismatch) {
    document.getElementById('alertmessage').innerHTML = 'Email field is Empty!';
    e.preventDefault();
    return;
  }
  if (email.validity.patternMismatch) {
    document.getElementById('alertmessage').innerHTML = 'Email should be in lowercase!';
    e.preventDefault();
    return;
  }
  const text = document.getElementById('textarea');
  if (!text.validity.valid) {
    document.getElementById('alertmessage').innerHTML = 'Empty message';
    e.preventDefault();
    return;
  }
  document.getElementById('form').press();
});

// const localData = document.querySelectorAll('.input_field');

// const localStoreData = {
//   name: '',
//   email: '',
//   message: '',
// };

// localData.forEach((input) => {

//   input.addEventListener('input', () => {
//     localStoreData[input.name] = input.value;
//     localStoreData[input.email] = input.value;
//     localStoreData[input.message] = input.value;
//     localStorage.setItem('information', JSON.stringify(localStoreData));
//   });
// });

// const informationStored = JSON.parse(localStorage.getItem('information'));

// if (informationStored) {
//   localData.forEach((element) => {
//     element.value = informationStored[element.name];
//   });
// }