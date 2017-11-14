class FormHandler {
  constructor(formSelector, inputSelector, buttonSelector, backSelector) {
    this.$formElement = $(formSelector);
    this.$inputElement = $(inputSelector);
    this.$buttonElement = $(buttonSelector);
    this.$backElement = $(backSelector);
  }

  addSubmitHandler(callback) {
    this.$formElement.on('submit', event => {
      event.preventDefault();
      const query = this.$inputElement.val();
      callback(query);
    })
  }

  addBackHandler(callback) {
    this.$backElement.on('click', event => {
      this.$backElement.removeClass('active');
      callback();
    })
  }

  addInputValue(title) {
    this.$inputElement.val(title);
  }

  addBackBtnVisibility() {
    this.$backElement.addClass('active');
  }

  addFocusHandler() {
    this.$inputElement.on('focus', () => {
      this.$inputElement.animate({
        width: '90%'
      }, 400);
      this.$buttonElement.animate({
        right: '70px'
      }, 400);
    });
  }

  addBlurHandler() {
    this.$inputElement.on('blur', () => {
      if (this.$inputElement.val() === '') {
        this.$inputElement.animate({
          width: '60%'
        }, 400);
        this.$buttonElement.animate({
          right: '260px'
        }, 400);
      }
    });
  }
}

export default FormHandler;
