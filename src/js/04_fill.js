'use strict';

const previewName = document.querySelector('.js__preview_name');

const previewJob = document.querySelector('.js__description');

//const profilePreview = document.querySelector('.js__profile-preview');

//const redPreview = document.querySelector('.js__red-preview');

const previewMail = document.querySelector('.js__preview_mail');

const previewTelephone = document.querySelector('.js__preview_telephone');

const previewLinkedIn = document.querySelector('.js__preview_linkedin');

const previewGitHub = document.querySelector('.js__preview_github');

const fillInput = document.querySelector('.js__fill');

const data = {
  palete: 1,
  full_name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

function renderPreview() {
  if (data.full_name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = data.full_name;
  }
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  //profilePreview.style.backgroundImage = '';
  //redPreview.style.backgroundImage = '';
  previewMail.href = `mailto:${data.email}`;
  previewTelephone.href = `tel:${data.phone}`;
  previewLinkedIn.href = data.linkedin;
  previewGitHub.href = `https://github.com/${data.github.replace('@', '')}`;
}

function handlerInputs(event) {
  const idInput = event.target.id;
  const valueInput = event.target.value;

  data[idInput] = valueInput;
  renderPreview();
}

fillInput.addEventListener('keyup', handlerInputs);
