// SPLIDE JS
var splide = new Splide( '.splide', {
    type: 'loop',
    perPage: 5,
    perMove: 3,
    pagination: boolean = false,
    breakpoints: {
		767: {
			perPage: 3,
		},
    }
} );
  
splide.mount();

// SCROLL TO TOP FUNCTION
// Get the button
let mybutton = document.getElementById("topButton");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Start animation when top viewport reaches top of element
document.addEventListener("DOMContentLoaded", () => {
    // Select the trigger element (parent of .eduTitle)
    const triggerElement = document.querySelector('.eduTitle').parentElement;
  
    // Select the elements to animate
    const animateElements = [
      { 
        elements: document.querySelectorAll('.edutl > div > div:first-child'), 
        className: 'animateCircle' 
      },
      { 
        elements: document.querySelectorAll('.edutl > div:first-child'), 
        className: 'animateBar' 
      }
    ];
  
    // Function to add class to each element in the NodeList
    function addAnimationClass(elements, className) {
      elements.forEach(element => {
        element.classList.add(className);
      });
    }
  
    // Function to check if the top margin of the trigger element reaches the top of the viewport
  function checkPosition() {
    const triggerRect = triggerElement.getBoundingClientRect();
    const marginTop = parseFloat(getComputedStyle(triggerElement).marginTop) || 0;

    //  Increase marginTop with pixels
    const increasedMarginTop = marginTop + 35;

    if (triggerRect.top - increasedMarginTop <= 0) {
      // Apply animation classes when the top margin of the trigger element reaches the viewport top
      animateElements.forEach(item => {
        addAnimationClass(item.elements, item.className);
      });
      // Remove the scroll event listener after triggering the animation
      window.removeEventListener('scroll', checkPosition);
    }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', checkPosition);

  // Initial check in case the page is already scrolled to the trigger element on load
  checkPosition();
});

// JQUERY
$(document).ready(function(){
    $('.infoText').hide();
    // $('btnInfoText').click(function()){
    //     $('.infoText').show()
    // }

    $('.btnInfoText').click(function(){

    })
})

// JS PRACTICE
var data = [
    'Agya',
    'Calya',
    'Avanza',
    'Xenia',
    'Sigra',
    'Rush',
    'Terios',
    'Kijang Innova',
    'Fortuner',
    'Hilux',
    'Land Cruiser',
    'Alphard',
    'Vellfire',
    'Camry'
]

var dataMotor = [
    'Vario',
    'Beat',
    'Scoopy',
    'CBR',
    'CB150R',
    'Ninja',
    'Ninja RR',
    'Ninja ZX',
    'Ninja H2',
    'Ninja H2R',
    'Ninja H2 5X',
    'Ninja 650',
    'Ninja 1000',
    'Ninja ZX-10R',
    'Ninja ZX-14R',
    'Ninja ZX-6R',
    'Ninja ZX-10RR',
    'Ninja ZX-10R SE',
    'Ninja ZX-10R ABS'
]

console.log('INI DATA LOCAL: ', data)
var dataString = 'Hello World!!!'
var dataNumber = 1124124351532
var dataBoolean = true

// TIPE DATA
console.log(dataString)
console.log(dataNumber)
console.log(dataBoolean)

// PERHITUNGAN
var a = 5
var b = 10
var countKali = a * b
var countTambah = a + b
var countKurang = a - b
var countBagi = a/b
var countSisaBagi = a % b

console.log('PERKALIAN', countKali)
console.log('PENJUMLAHAN', countTambah)
console.log('PENGURANGAN', countKurang)
console.log('PEMBAGIAN', countBagi)
console.log('SISA BAGI', countSisaBagi)

// PERBANDINGAN
var resultTipeData = a === b //Ngecek tipe data
// var resultTipeData = a == b //ngga ngecek tipe data
console.log('PERBANDINGAN', resultTipeData)

var resultKurangDari = a < b
console.log(resultKurangDari)

var resultLebihDari = a > b
console.log(resultLebihDari)

// LOGIKA
const nilaiUjian = 80
const nilaiAbsensi = 70

const lulusUjian = nilaiUjian >= 75
const lulusAbsensi = nilaiAbsensi >= 85

const fullCertificate = lulusUjian && lulusAbsensi
const partialCertificate = lulusUjian || lulusAbsensi
const noCertificate = !lulusUjian && !lulusAbsensi

console.log('FULL CERTIFICATE', fullCertificate)
console.log('PARTIAL CERTIFICATE', partialCertificate)
console.log('NO CERTIFICATE', noCertificate)

// CONDITIONAL
if (nilaiUjian >= 80) {
    console.log('LULUS')
} else {
    console.log('TIDAK LULUS')
}

// 4 CONDITIONAL
if (nilaiUjian >= 75 && nilaiAbsensi >= 75) {
    console.log('EXCELLENT')
} else if (nilaiUjian < 75 && nilaiAbsensi >= 75){
    console.log('GOOD')
} else if (nilaiAbsensi < 75 && nilaiUjian >= 75){
    console.log('GOOD')
} else {
    console.log('BAD')
}

// Ternery Operator
const kelulusan = nilaiUjian >= 75 && nilaiAbsensi >= 75 ? 'Excellent' : (nilaiUjian < 75 && nilaiAbsensi >= 75) || (nilaiAbsensi < 75 && nilaiUjian >= 75) ? 'Good' : 'Bad'
console.log(kelulusan)

//  ARRAY METHODS
console.log(dataMotor)
console.log(dataMotor.length)
console.log(dataMotor.toString())
console.log(dataMotor.join(' - '))
console.log(dataMotor[5])

const dataGabung = dataMotor.concat(data)
console.table(dataGabung)

// LOOPING
for (let index = 0; index < dataGabung.length; index++) {
    console.log('DATE KE - ' + index + ': ' + dataGabung[index])
}

const user = {
    fullName : 'John Doe',
    email : 'jhon@mail.co',
    age : '25'
}

let dataUser=''
for (let data in user) {
    dataUser += user[data] + ' '
}
console.log(dataUser)

const users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]

users.forEach(user => {
    for(let v in user) {
        // console.log(user[v])
        // document.writeln(user[v] + '<br>')
        // document.getElementById("userDataPrint").innerHTML = user[v]
        const dataUserMap = users.map(user => 
            '<div class="col-lg-4 col-md-6"><img src="${user.avatar}" width="100%"><br><br><p>${user.email}<br>${user.first_name}<br>${user.last_name}<br></p></div>').join('')

        listUser.innerHTML = '<div class="row">${dataUserMap}</div>'
    }
})