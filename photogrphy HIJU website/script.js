
/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

/* Form */
function validateForm(e) {
    e.preventDefault()
    var name = document.contactform.name.value
    var email = document.contactform.email.value
    var subject = document.contactform.subject.value
   if (name.length==0)
    alert(`name is required`)
    if (email.length<10)
    alert(`email is incorrect`)
   if (subject.length<4)
   alert(`please include a subject`)
    
   } ;