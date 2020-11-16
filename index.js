/* document.querySelector("#myForm").addEventListener("submit", function(e){
    var request = new XMLHttpRequest();
    let url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${inputVal}`;
    request.open("GET", url, false);
    request.send(null);
    e.preventDefault(); //stop form from submitting
    const inputVal = document.getElementById("inlineFormInput").value;
    fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${inputVal}`)
    console.log('hola')
        .then(inputVal => {
            if (request.status === 200) {
                console.log('SUCCESS')
            } else {
                console.log("Not Successful")
            }
            
        })
    .then(data => console.log('--->',data))
    .catch(error => console.log("ERROR"))
});  */

document.querySelector('#myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const inputVal = document.getElementById('inlineFormInput').value;
  console.log('INPUT VALUE :', inputVal);

  var request = new XMLHttpRequest();
  let url = `https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${inputVal}`;
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

  // const html = data.data.map(user => {
  //   return `
  //   <div class="user">
  //   <p><img src= "${user.avatar}" alt="${user.first_name}" /> </p>
  //   <p>Name: ${user.first_name}</p>
  //   <p>Email: ${user.email}</p>
  //   </div>
  //   `
  // }).join('');
  //console.log(html)
  //document.querySelector('#app').innerHTML = html
});
