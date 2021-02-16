import { TODO_REGEXP } from '../constants'

describe('test regex', () => {
    test("searchFileContent", async () => {
        expect(TODO_REGEXP.test("/** TODO **/")).toBe(true)
        expect(TODO_REGEXP.test("/**  TODO **/")).toBe(true)
        expect(TODO_REGEXP.test("TODO")).toBe(false)
        expect(TODO_REGEXP.test("/**TODO**/")).toBe(true)
        expect(TODO_REGEXP.test("/**TODO")).toBe(false)
        expect(TODO_REGEXP.test("//TODO")).toBe(true)
        expect(TODO_REGEXP.test("// TODO")).toBe(true)
        expect(TODO_REGEXP.test("//  TODO")).toBe(true)
    })
})