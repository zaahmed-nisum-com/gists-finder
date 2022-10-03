
const validFilesType = ['Python', 'javascript'];
export const filters = {
    getSpesificTagsFile: (data) => {
        let fileArr = []
        for (let file in data) {
            let language = data[file].language;
            if (fileArr.indexOf(language) === -1 && validFilesType.includes(language)) {
                fileArr.push(data[file]);
            }
        }
        return fileArr
    },
}