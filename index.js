document.querySelector("#myForm").addEventListener("submit", function(e){
    var request = new XMLHttpRequest();
    let url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${inputVal}`;
    request.open("GET", url, false);
    request.send(null);
    e.preventDefault(); //stop form from submitting
    const inputVal = document.getElementById("inlineFormInput").value;
    fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${inputVal}`)
        .then(inputVal => {
            if (request.status === 200) {
                console.log('SUCCESS')
            } else {
                console.log("Not Successful")
            }
            
        })
    .then(data => console.log('--->',data))
    .catch(error => console.log("ERROR"))
}); 



