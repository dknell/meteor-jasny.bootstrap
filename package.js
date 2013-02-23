Package.describe({
	summary: "Latest version of Bootstrap by Jasny ()"
});

Package.on_use(function (api){
	api.use('jquery', 'client');
	api.add_files('lib/bootstrap/css/bootstrap.css', 'client');
	api.add_files('lib/bootstrap/css/bootstrap-responsive.css', 'client');
	api.add_files('lib/bootstrap/js/bootstrap.js', 'client');
	api.add_files('lib/bootstrap/img/glyphicons-halflings.png', 'client');
	api.add_files('lib/bootstrap/img/glyphicons-halflings-white.png', 'client');

	// XXX this makes the paths to the icon sets absolute. it needs
	// to be included _after_ the standard bootstrap css so
	// that its styles take precedence.
	api.add_files('lib/bootstrap/css/bootstrap-override.css', 'client');
});