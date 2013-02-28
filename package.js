var path = require('path');

Package.describe({
	summary: "Latest version of Bootstrap by Jasny (2.3.0-j4). Also includes the iconic fonts."
});

Package.on_use(function (api){
	api.use('jquery', 'client');
	api.add_files('lib/bootstrap/css/bootstrap.css', 'client');
	api.add_files('lib/bootstrap/css/bootstrap-responsive.css', 'client');
	api.add_files('lib/bootstrap/js/bootstrap.js', 'client');
	api.add_files('lib/bootstrap/img/glyphicons-halflings.png', 'client');
	api.add_files('lib/bootstrap/img/glyphicons-halflings-white.png', 'client');

	// iconic fonts
	api.add_files('lib/bootstrap/font/iconic_fill.woff', 'client');
	api.add_files('lib/bootstrap/font/iconic_fill.ttf', 'client');
	api.add_files('lib/bootstrap/font/iconic_fill.svg', 'client');
	api.add_files('lib/bootstrap/font/iconic_fill.otf', 'client');

	// XXX this makes the paths to the icon sets absolute. it needs
	// to be included _after_ the standard bootstrap css so
	// that its styles take precedence.
	api.add_files('lib/bootstrap/css/bootstrap-override.css', 'client');
});