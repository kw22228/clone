const promiseDelay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

export default promiseDelay;
