Package.describe({
  name: "rajit:bootstrap3-datepicker-en-za",
  git: "https://github.com/rajit/bootstrap3-datepicker.git",
  summary: "Meteor packaging of South African English translation of uxsolutions/bootstrap-datepicker",
  version: "1.7.1",
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.use('rajit:bootstrap3-datepicker@1.7.1', 'client');
  api.addFiles('bootstrap-datepicker.en-ZA.min.js', 'client');
});
