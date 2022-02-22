export const getData = (data, memberName) => {
     return data.find(({ name }) => name === memberName);
}