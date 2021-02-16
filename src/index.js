import fs from 'fs'
import { tranverseDirectory } from './library/file'
import { searchFileContent } from './library/string'
import { TODO_REGEXP } from './library/constants'

const run = async (path) => {
    const fileFound = await tranverseDirectory(`${__dirname}/${path}`);
    fileFound.forEach(filePath => {
        if(searchFileContent(filePath, TODO_REGEXP)) {
            console.log(filePath);
        }
    })
}

run('./')
