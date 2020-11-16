window.onload = function () {
  const regexArray = /\?email=(.+)$/.exec(window.location.search);
  let email;
  if (regexArray !== null) {
    email = regexArray[1];
  }else{
      throw Error('Invalid Email');
  }
  var request = new XMLHttpRequest();
  let url = `https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`;
  request.open('GET', url, false);
  request.send(null);

  fetch(url)
    .then((response) => {
      if (request.status === 200) {
        console.log('si funciona');
      }

      if (!response.ok) {
        console.log(response);
        throw Error('ERROR');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.email);
      const person = `${data.first_name} ${data.last_name}`;
      const description = data.description;
      const address = data.address;
      const phoneNumbers = data.phone_numbers;
      const email = data.email;
      const relatives = data.relatives;
      document.getElementById('person').innerHTML = person;
      document.getElementById('description').innerHTML = description;
      document.getElementById('address').innerHTML = address;
      document.getElementById('phoneNumbers').innerHTML = phoneNumbers;
      document.getElementById('email').innerHTML = email;
      document.getElementById('relatives').innerHTML = relatives;
    });
};
