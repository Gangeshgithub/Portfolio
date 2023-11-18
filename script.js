
//toggle icon navbar

let menuIcon=document.querySelector('#box-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    

}

//scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');





window.onscroll = () =>
{ 
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 100;
        let height=sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            //active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });

            //ative section for animation on scrool

             sec.classList.add('show-animate');

        }

        // if want to  use animation that repeats on scroll use this
        
        else{
            sec.classList.remove('show-animate');
        }

        


    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click links(scoll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll 

    let footer=document.querySelector('footer');

    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY >= document.scrollingElement.scrollHeight);


}


// code for emailjs


function sendMail(){

var templateParams = {
    from_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    phone_no: document.getElementById("phone_no").value,
    message: document.getElementById("message").value,

    
};
 
emailjs.send('service_e9zs4gh','template_6gt2nqj', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })

}



