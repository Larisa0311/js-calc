// document.querySelector('.form__button').onclick = () => {
//   const form = document.getElementById('form')

//   const email = document.getElementById('email')

//   console.log(email.checkValidity())

//   if (!email.checkValidity()) {
//     if (email.value.length === 0) {
//       email.setCustomValidity('Помилка. Введіть значення!')
//     }

//     if (email.value.length > 10) {
//       email.setCustomValidity(
//         'Помилка. Введіть до 10 символів!',
//       )
//     }

//     email.reportValidity()
//   }
// }

// document
//   .querySelectorAll('.form__button-add')
//   .forEach((element) => {
//     element.onclick = () => {
//       if (element.getAttribute('operator') === '+') {
//         return age.stepUp(
//           Number(element.getAttribute('value')),
//         )
//       }

//       if (element.getAttribute('operator') === '-') {
//         return age.stepDown(
//           Number(element.getAttribute('value')),
//         )
//       }
//     }
//   })

// document.querySelector('.form__button-save').onclick =
//   () => {
//     const value = document.getElementById('username').value
//     if (value.length === 0) alert('Даних нема')
//     navigator.clipboard
//       .writeText(value)
//       .then(() => alert('Дані зберегли'))
//   }

// const listener = () => {
//   alert('click')
// }

// const listener2 = () => {
//   alert('click 2')
// }

// document
//   .querySelector('.form__button')
//   .addEventListener('click', listener)

// document
//   .querySelector('.form__button')
//   .addEventListener('click', listener2)

// document
//   .querySelector('.form__button')
//   .removeEventListener('click', listener)

// const outer = document.getElementById('outer')
// const inner = document.getElementById('inner')

// outer.addEventListener(
//   'click',
//   () => alert('Capture phase (фаза захоплення) outer'),
//   { capture: true },
// )

// inner.addEventListener(
//   'click',
//   (e) => {
//     e.stopPropagation()
//     alert('Capture phase (фаза захоплення) inner')
//   },
//   { capture: true },
// )

// inner.addEventListener(
//   'click',
//   (e) => {
//     alert('Capture phase (фаза захоплення) inner 2')
//   },
//   { capture: true },
// )

// outer.addEventListener(
//   'click',
//   () => alert('Bubble phase (фаза спливання) outer'),
//   { capture: false },
// )

// inner.addEventListener(
//   'click',
//   () => alert('Bubble phase (фаза спливання) inner'),
//   { capture: false },
// )

// document
//   .querySelector('.form__button')
//   .addEventListener('click', (e) => {
//     e.preventDefault()

//     // console.log(e.target)
//     // console.log(e.currentTarget)
//     console.log(e.composedPath())
//   })

const button = document.querySelector('.form__button')

const myEvent = new CustomEvent('myevent', {
  detail: { id: 100 },
})

button.addEventListener('myevent', (e) => {
  alert(e.detail.id)
})

button.dispatchEvent(myEvent)
