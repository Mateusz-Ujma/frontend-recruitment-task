function setCookie(cname, cvalue, exdays) {
 const d = new Date();
 d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
 let expires = "expires=" + d.toUTCString();
 document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
 let name = cname + "=";
 let decodedCookie = decodeURIComponent(document.cookie);
 let ca = decodedCookie.split(';');
 for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) == ' ') {
   c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
   return c.substring(name.length, c.length);
  }
 }
 return "";
}
function checkCookie(cname) {
 let username = getCookie(cname);
 if (username != "") {
  return true;
 } else {
  false
 }
}
const resetCookie = (cName, text) => {
 if (checkCookie(cName)) {
  setCookie(cName, 0, -100);
  text.innerHTML = `You have clicked<span class="popup-window-content-bold"> 0 times</span> to related button.`
 }
}

export const moduleShow = (module, text, resetBtn) => {
 module.classList.add('visible');
 if (module.classList.contains('invisible')) {
  module.classList.remove('invisible');
 }

 if (!checkCookie(module.id)) {
  setCookie(module.id, 0, 1000);
 }
 let numberClick = getCookie(module.id);
 numberClick++;

 text.innerHTML = `You have clicked<span class="popup-window-content-bold"> ${numberClick} times</span> to related button.`

 setCookie(module.id, numberClick, 1000);
 if (getCookie(module.id) >= 5) {
  resetBtn.classList.add('visible');
  resetBtn.classList.remove('invisible');
 }
 else {
  resetBtn.classList.add('invisible');
  resetBtn.classList.remove('visible');
 }
 resetBtn.addEventListener('click', () => resetCookie(module.id, text))
}

export const moduleHide = (module) => {
 module.classList.add('invisible');
 module.classList.remove('visible');
}





