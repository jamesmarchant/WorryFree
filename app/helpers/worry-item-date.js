import Ember from 'ember';

function padStringNumber(s) { 
  return (s < 10) ? '0' + s : s; 
}

export function worryItemDate([date]) {
  var d = new Date(date);

  return [
           padStringNumber(d.getDate()), 
           padStringNumber(d.getMonth()+1), 
           padStringNumber(d.getFullYear())
         ].join("/");
}

export default Ember.Helper.helper(worryItemDate);
