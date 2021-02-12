import moment from 'moment';

export const getDateRange = (search) => {
  if (!search) return;
  const urlParams = new URLSearchParams(search);

  return [
    moment(urlParams.get('dateFrom'), 'YYYY-MM-DD'),
    moment(urlParams.get('dateTo'), 'YYYY-MM-DD'),
  ];
}