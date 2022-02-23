export const getData = (data, technoName) => {
     return data.find(({ name }) => name === technoName);
}