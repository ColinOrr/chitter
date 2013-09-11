define(['knockout'], function(ko) {
  return function cheepsViewModel() {
    this.active = ko.observable(false);
    this.inactive = ko.observable(true);
  };
});