
const destinationURL= "http://localhost:3000/users";

  
function submitData(person,electricThing){
    const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
        name: person,
        email: electricThing,}
        ),
  };
  
  fetch(destinationURL, configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function(object) {
        let h2 = document.createElement('h2');
        h2.innerHTML = object.id;
        document.body.appendChild(h2);
        console.log(object);
    })
    .catch(function(message) {
        let h3 = document.createElement('h3');
        h3.innerHTML = message;
        document.body.appendChild(h3);
        console.log(message);
    });
}

