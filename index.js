//Đối tượng `Validator`
function Validator(options){
  var formElement = document.querySelector(options.form)
  if(formElement){
    options.rules.forEach((rule)=>{
      var inputElement = formElement.querySelector(rule.selector)
      if(inputElement){
        inputElement.onblur = () =>{
          console.log(rule)
        }
      }
    })
  }
}

// Định nghĩa rules
Validator.isRequired = function (selector){
  return {
    selector: selector,
    test: function (){

    }
  }
}

Validator.isEmail = function (selector){
  return {
    selector: selector,
    test: function (){

    }
  }
}