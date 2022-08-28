'use strict';
import { moduleShow, moduleHide } from "/src/alertModule.js";

const mainBtn = document.querySelector('.main-btn');
const popup = document.querySelector('.popup');
const popupBg = document.querySelector('.popup-bg');
const popupBtn = document.querySelector('.popup-window-btn');
const popupContent = document.querySelector('.popup-window-content');
const popupResetBtn = document.querySelector('.popup-window-resetbtn');

mainBtn.addEventListener('click', () => moduleShow(popup, popupContent, popupResetBtn));
popupBg.addEventListener('click', () => moduleHide(popup));
popupBtn.addEventListener('click', () => moduleHide(popup));


