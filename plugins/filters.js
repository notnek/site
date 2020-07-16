import Vue from 'vue';
import format from 'date-fns/format';

Vue.filter('formatFullDate', (date) => {
  if (!date) {
    return '';
  }

  return format(new Date(date), 'MMMM do, y');
});

Vue.filter('formatYear', (date) => {
  if (!date) {
    return '';
  }

  return format(new Date(date), 'y');
});
