import dayjs from 'dayjs';

const serializeDateToYear = (date: string) => dayjs(date).format('DD/MM/YYYY');

export default serializeDateToYear;
