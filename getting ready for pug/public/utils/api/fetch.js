export const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      // content: 'connect-src "self"',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
export const getData = async (url = '')  => {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      // content: 'connect-src "self"',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      // body: JSON.stringify(data)
    });
    return response.json();
  }