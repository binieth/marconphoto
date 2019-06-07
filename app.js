// Animate smoth scroll

$('#view-work').on('click', function(){
    const images = $('#images').position.top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});

// typing effect

const texts = ['family & children photo', 'wedding & engagement', 'maternity photo', 'birthday photo', 'graduation photo' ];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

if(count === texts.length ){
    count = 0;
}
currentText = texts[count];
letter = currentText.slice(0, ++index);
document.querySelector('.typing').textContent = letter;
if(letter.length === currentText.length){
    count++;
    index = 0;
}
setTimeout(type, 400);

}());

//image on click

/* $(function ()
{
    $('img').on('click', function ()
    {
        $(this).width(1000);
    });
});
*/

// footer copyright year

var today = new Date();
var year  = today.getFullYear();

var e = document.getElementById('copyright');
e.innerHTML = '<p> Copyright &copy;' + year + ' Biniyam @ Marcon Photography' + '</p>';