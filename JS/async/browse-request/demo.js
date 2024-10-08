import { getAvatar } from './api.js';

const btn = document.querySelector('button');
const statusDiv = document.querySelector('div.status');
const dataDiv = document.querySelector('div.data');
const mbtiInput = document.querySelector('#mbti');
const colorCodeInput = document.querySelector('#colorCode');

btn.addEventListener('click', async function (e) {
  statusDiv.textContent = '로딩 중...';
  dataDiv.innerHTML = '';
  try {
    const avatar = await getAvatar(3);
    statusDiv.textContent = '완료';
    dataDiv.innerHTML = `<span>${avatar.hairType}</span><span>${avatar.hairColor}</span>`;
  } catch (e) {
    statusDiv.textContent = '오류';
    dataDiv.innerHTML = `<span>${e.message}</span>`;
  }
});