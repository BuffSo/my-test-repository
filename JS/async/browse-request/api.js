export async function getAvatars(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/avatars');
  
  Object.keys(params).forEach( (key) => url.searchParams.append(key, params[key]) );

  const res = await fetch(url);
  if(!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  const data = await res.json();
  return data;
}

export async function getAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
  if(!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }
  const data = await res.json();


  return data;
}

export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers : {
      'Content-Type' : 'application/json',
    },
  });
  if(!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}
/*
export async function patchAvatar(id, avatarData) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type' : 'application/json',
    },
  });
  if(!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }  
  const status = res.status;
  const data = await res.json();
  return { status, data };            // 상태 코드와 응답 데이터를 함께 반환
}
*/
export async function patchAvatar(id, avatarData) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type' : 'application/json',
    },
  });

  if(!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }
  const data = await res.json();
  return data;            
}

export async function deleteAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json',
    },
  });
  if(!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}

