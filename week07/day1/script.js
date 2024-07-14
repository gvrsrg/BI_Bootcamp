const users = [
    { username: "aaa", email: "aaa@gmail.com" },
    { username: "bbb", email: "bbb@gmail.com" },
    { username: "ccc", email: "ccc@gmail.com" },
  ];
  /** 1. getDataFromServer function return a Promise with users data as Array of objects from server as json
   * Simulate successful completion after 2 seconds
   * 2. Call this function and log the data as an Array datatype 
   * 3. Simulate an error
   * 4. return to step 2, and create render function that will display the users on the html page
  */

  const getDataFromServer = (arr) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (arr) resolve(JSON.stringify(users));
        else reject('Error 404');
      }, 2000);
    });
  }

  getDataFromServer(users)
    .then((data) => {
      console.log(data);
      render(JSON.parse(data))
    })
    .catch((err) => {
      console.log(err);
    })

  function render(data) {
    console.log('Render');
    console.table(data);
    let container = document.getElementById('container')
    //let card = document.createElement('div')
    const html = data.map(e => `<p>${e.username}, ${e.email}</p>`).join('')
    container.innerHTML = html
//    container.appendChild(card)
  }

//  render(users)
