const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const numberWithCommas = (x: number): string => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export { days, month, numberWithCommas };
