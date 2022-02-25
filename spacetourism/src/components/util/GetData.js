export const getData = (data, nameToBeFind) => {
     return data.find(({ name }) => name === nameToBeFind);
}