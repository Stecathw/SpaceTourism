export const getData = (data, destName) => {
     return data.find(({ name }) => name === destName);
}