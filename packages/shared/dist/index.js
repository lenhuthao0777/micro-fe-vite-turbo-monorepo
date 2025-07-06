export const indIndex = (arr, fn) => {
    return arr.findIndex((el) => fn(el));
};
export const logMessage = () => {
    console.log('This is a shared message from @micro/shared package');
};
