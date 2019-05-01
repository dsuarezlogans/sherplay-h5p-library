var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {object} params Options for this library.
 */
H5P.Text = function (params) {
  this.text = params.text === undefined ? '<em>New text</em>' : params.text;
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 *
 * @param {jQuery} $wrapper
 */
H5P.Text.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-text').html(this.text);
  console.log('Develop by Danny');

  const AJAX_URL = 'http://localhost.meltwater.net:8081/wp-admin/admin-ajax.php';
  const data = {
    action: 'add_classnote',
    name: 'Danny S.'
  };

  const response = (res) => console.log(res);

  H5P.jQuery.post(AJAX_URL, data, response);
};
