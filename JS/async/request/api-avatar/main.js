import { getAvatars, getAvatar, createAvatar, patchAvatar, deleteAvatar } from "./api.js";

let avatars;
let avatar;
let params = { offset:2, limit: 2};
/*
avatars = await getAvatars(params);
//avatar = await getAvatars({id:1});
//console.log(avatars);
try {
  avatar = await getAvatar(795);
  console.log(avatar);  
} catch (e) {
  console.log(e.message);
}
*/
let avataData = {
  "hairType": "empty",
  "hairColor": "brown",
  "skin": "tone400",
  "clothes": "dressFormal",
  "accessories" : "earbuds",
}
let res;
try {
  res = await createAvatar(avataData);
} catch (e) {
  console.log(e.message);
}
/*
let avataDataMOD = {
  "hairType": "none",
  "hairColor": "black"  
};

//res = await patchAvatar(795, avataDataMOD);
console.log(`상태 코드 : ${res.status}`);
console.log(res.data);

//res = await deleteAvatar(795);
console.log(res);
*/

