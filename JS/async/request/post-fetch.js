const surveyData = {
  mbti: 'INTJ',
  colorCode: '#ABCDEF',
  password: '0000',
};
const res = await fetch('https://learn.codeit.kr/api/color-surveys', {
  method: 'POST',
  body: JSON.stringify(surveyData),
  headers: {
    'Content-Type': 'application/json',
  },
});


const data = await res.json();
console.log(data);