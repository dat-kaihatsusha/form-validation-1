//Đối tượng `Validator`
function Validator(options){

  // Ham thuc hien validate
  function validate(inputElement, rule){
    var errorMessage = rule.test(inputElement.value)
    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
    if(errorMessage){
      errorElement.innerText = errorMessage
      inputElement.parentElement.classList.add('invalid')
    }else{
      errorElement.innerText = ''
      inputElement.parentElement.classList.remove('invalid')
    }
  }

  // Lay element cua form can Validate
  var formElement = document.querySelector(options.form)
  if(formElement){
    options.rules.forEach((rule)=>{
      var inputElement = formElement.querySelector(rule.selector)

      if(inputElement){
        // Xu ly truong hop blur khoi input
        inputElement.onblur = () =>{
          validate(inputElement, rule)
        }

        // Xu ly moi khi nguoi dung nhap vao input
        inputElement.oninput = function (){
          var errorElement = inputElement.parentElement.querySelector('.form-message')
          errorElement.innerText = ''
          inputElement.parentElement.classList.remove('invalid')
        }
      }
    })
  }
}

// Định nghĩa rules
//Nguyen tac cua cac rules:
//1. Khi co loi => tra ra message loi
//2. khi hop le => khong tra ra cai gi ca (undefined)
Validator.isRequired = function (selector){
  return {
    selector: selector,
    test: function (value){
      return value.trim()? undefined : 'Vui long nhap truong nay!'
    }
  }
}

Validator.isEmail = function (selector){
  return {
    selector: selector,
    test: function (value){
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(value)? undefined : 'Truong nay phai la email!'
    }
  }
}

Validator.minLength = function (selector, min){
  return {
    selector: selector,
    test: function (value){
      return value.length>=min? undefined : `Vui long nhap vao toi thieu ${min} ki tu`
    }
  }
}

Validator.isConfirmed = function (selector){
  return{}
}