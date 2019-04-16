var H5P = H5P || {};

H5P.Apuntes = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      message: 'Hello world!',
      image: null
    }, options);
    // Keep provided id.
    this.id = id;
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-apuntes");
    // Add image if provided.
    if (this.options.image && this.options.image.path) {
      $container.append('<img class="apuntes-image" src="' + H5P.getPath(this.options.image.path, this.id) + '">');
    }
    // Add greeting text.
    $container.append('<div class="apuntes-text">' + this.options.message + '</div>');
    $container.append('<div class="apuntes-text">' + this.options.apuntes + '</div>');
  };

  return C;
})(H5P.jQuery);