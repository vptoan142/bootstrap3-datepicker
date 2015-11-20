Package.describe({
  name: "rajit:bootstrap3-datepicker-bs",
  git: "https://github.com/rajit/bootstrap3-datepicker.git",
  summary: "Meteor packaging of Bosnian translation of eternicode/bootstrap-datepicker",
  version: "1.5.0",
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
    
  api.addFiles('bootstrap-datepicker.bs.min.js', 'client');
});
