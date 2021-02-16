import { tranverseDirectory } from './library/file'
import { searchFileContent } from './library/string'
import { TODO_REGEXP } from './library/constants'

const run = async (path, regexp) => {
    const fileFound = await tranverseDirectory(`${__dirname}/${path}`);
    fileFound.forEach(filePath => {
        if(searchFileContent(filePath, regexp)) {
            console.log(filePath);
        }
    })
}

run('./', TODO_REGEXP)
