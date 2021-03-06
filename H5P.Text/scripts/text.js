var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {object} params Options for this library.
 */
H5P.Text = function (params) {
  this.text = params.text === undefined ? '<em>New text</em>' : params.text;
  this.classnote = params.classnote === undefined ? 'none' : params.classnote;
  this.ajaxurl = params.ajaxurl
  
  setTimeout(function() {
    H5P.jQuery('.field-name-classnote .h5peditor-select').select2();
    console.log(H5P.jQuery('.field-name-classnote .h5peditor-select').select2())
  }, 5000)
  
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 * and send a ajax request to hook function with classnote id.
 * 
 * @param {jQuery} $wrapper
 */
H5P.Text.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-text').html(this.text);

  if(!this.ajaxurl || !this.classnote) return;

  const AJAX_URL = this.ajaxurl;
  const data = {
    action: 'add_classnote',
    classnoteId: this.classnote
  };
  const response = (res) => console.log('Classnote unblocked succesfully!', res);


  H5P.jQuery.post(AJAX_URL, data, response);
};
