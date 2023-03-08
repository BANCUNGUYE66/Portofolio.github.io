const humburger = document.querySelector('.humburger_menu');
const navBar = document.querySelector('.menu');

humburger.addEventListener('click', () => {
      humburger.classList.toggle('active');
      navBar.classList.toggle('active');
});


document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
    humburger.classList.remove('active');
    navBar.classList.remove('active');
}))

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
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
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
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
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
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
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
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: 'http:/about.html',
    sourceLink: '#',
  },
];

function getmyTemplate(tools){
    let toolsContent = '';
    tools.forEach((tool) => {
        toolsContent += `
         <li>${tool}
        `;
    });
    return toolsContent;
}
function popupModal(object){
    const popModalContents = `
     <div class="popup-background"></div>
     <div class="popup-card-container">
         <div class="popup-card-1">
             <div class="pop_cancel">
                 <h2>${object.projectName}</h2>
                 <img src="images/pop_multiply/Normal Button/Tertiary/Icons/Icon.png" alt=""/>
             </div>
             <div class="year">
                 <ul>
                     <li class="canopy">CANOPY</li>
                     <li>Back End Dev</li>
                     <li>2015</li>
                 </ul>
             </div>
             <div class="pop_card_one_image">
                 <img src="${object.image}" alt="${object.alt}" />
             </div>
             <div class="pop_desktop_paragraph">
                 <div class="pop_paragraph">
                     <p>${object.paragraph}</p>
             </div>
             <div class="pop_desktop_btn">
                 <div class="pop_skills_button">
                     <ul class="first_button">
                         <li><a href="#">html</a></li> 
                         <li><a href="#">css</a></li> 
                         <li><a href="#">javascript</a></li>
                     </ul>
                     <ul class="second_button">
                         <li><a href="#">html</a></li>
                         <li><a href="#">css</a></li>
                         <li><a href="#">javascript</a></li>
                     </ul>
                 </div>
                 <div class="popup_button">
                     <button class="live-btn">See live<img src="" alt=""/></button>
                     <button class="source-btn">See source <img src="" alt=""/></button>
                 </div>
             </div>
         </div>
     </div>
     </div>

    `;
    return popModalContents;

}