// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoORr1CAr9L8hceSyytrzqHhgFSCfuJUU",
    authDomain: "wwcontactform-cd7da.firebaseapp.com",
    databaseURL: "https://wwcontactform-cd7da.firebaseio.com",
    projectId: "wwcontactform-cd7da",
    storageBucket: "wwcontactform-cd7da.appspot.com",
    messagingSenderId: "187590736031"
  };
  firebase.initializeApp(config);

  //reference messages collection
  var messagesRef = firebase.database().ref('messages');


//listen for form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
	e.preventDefault();


	//get values
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');


	//save message
	saveMessage(name, company, email, phone, message);

	document.querySelector('.alert').style.display = 'block';

	//hide alert after three seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	},3000);

	//reset form after submission
	document.getElementById('contactForm').reset();
}


//fucntion to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

//save message to firebase collection 'messages'
function saveMessage(name, company, email, phone, message){
	var newMessageRef = messagesRef.push();
		newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message:message
	})
}