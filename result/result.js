window.onload = function () {
  //Regex conditions here
  const regexArray = /\?email=(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?))$/.exec(
    window.location.search
  );
  let email;
  if (regexArray !== null) {
    email = regexArray[1];
  } else {
    throw Error('Invalid Email');
  }
  var request = new XMLHttpRequest();
  let url = `https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`;
  request.open('GET', url, false);
  request.send(null);

  fetch(url)
    .then((response) => {
      if (request.status === 200) {
        console.log('it works');
      }

      if (!response.ok) {
        console.log(response);
        throw Error('ERROR');
      }
      return response.json();
    })
    //adding the data API to each Id on the page
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
