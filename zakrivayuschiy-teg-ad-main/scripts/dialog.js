const openDialogButton = document.querySelector('.save-button');
const dialog = document.querySelector('.dialog');
const closeDialogButton = document.querySelector('.dialog__button');

openDialogButton?.addEventListener('click', () => {
  dialog?.showModal();
});

closeDialogButton?.addEventListener('click', () => {
  dialog?.close();
});
