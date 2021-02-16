import { searchFileContent } from '../string'

describe('string helper', () => {
    test("searchFileContent", async () => {
        let targetfile = `${__dirname}/__fixture__/file/file1.js`;
        const regex = /TODO/
        expect(searchFileContent(targetfile, regex)).toBe(true)
        targetfile = `${__dirname}/__fixture__/file/file2.txt`;
        expect(searchFileContent(targetfile, regex)).toBe(false)
    })
})