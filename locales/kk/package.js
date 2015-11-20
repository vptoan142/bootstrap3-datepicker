Package.describe({
  name: "rajit:bootstrap3-datepicker-kk",
  git: "https://github.com/rajit/bootstrap3-datepicker.git",
  summary: "Meteor packaging of Kazakh translation of eternicode/bootstrap-datepicker",
  version: "1.5.0",
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
    
  api.addFiles('bootstrap-datepicker.kk.min.js', 'client');
});
