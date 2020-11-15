document.querySelector("#myForm").addEventListener("submit", function(e){
    e.preventDefault(); //stop form from submitting
    const inputVal = document.getElementById("inlineFormInput").value;
    fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${inputVal}`)
//.then(response => response.json())
    .then(data => console.log('--->',data)); 
}); 
