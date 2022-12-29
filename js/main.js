let allStudents = [];


window.localStorage.setItem('allStudents', JSON.stringify(allStudents))

let elForm = document.querySelector('.form');
let firstName = document.querySelector('.form__firstname__input')
let lastName = document.querySelector('.form__lastname__input')
let selectSchool = document.querySelector('.form__school__select')
let selectClass = document.querySelector('.form__class__select')
let selectScience = document.querySelector('.form__science__select')
let schoolCode = document.querySelector('.form__code__select')

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    allStudents.push(
        {
            first_name: firstName.value,
            last_name: lastName.value,
            number_school: selectSchool.value,
            number_class: selectClass.value,
            select_science: selectScience.value,
            school_code: schoolCode.value
        }
    )
    
    window.localStorage.setItem('allStudents', JSON.stringify(allStudents))
    console.log(JSON.parse(window.localStorage.getItem('allStudents')));
})