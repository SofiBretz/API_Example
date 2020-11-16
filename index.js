document.querySelector('#myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  //get the input value
  const inputVal = document.getElementById('inlineFormInput').value;
  console.log('INPUT VALUE :', inputVal);

  var request = new XMLHttpRequest();
  let url = `https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${inputVal}`;
  request.open('GET', url, false);
  request.send(null);

  fetch(url)
    .then((response) => {
      if (request.status === 200) {
        console.log('it works');
      }
      //if the page doesn't work it will be returned and an error will occur
      if (!response.ok) {
        console.log(response);
        throw Error('ERROR');
      }
      return response.json();
    })
    // Checking if the user is value
    .then((data) => {
      if (data.length > 0) {
        window.location.href = `/result/index.html?email=${inputVal}`;
      } else {
        const divFail = new HTMLDivElement();
        divFail.innerHTML = 'Invalid User';
        document.getElementsByClassName('formContainer').appendChild(divFail);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
