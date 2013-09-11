define(['knockout'], function(ko) {
  return function cheepViewModel() {
    this.active = ko.observable(false);
    this.inactive = ko.observable(true);
  };
});