import { promises as fs } from 'fs'
import path from 'path'
import { isArray } from 'util'

const file = path.resolve('./data/entries.json')

// private function for the module
const write = async (data) => {
    await fs.writeFile(file, JSON.stringify(data))
}

const add = async (data) => {
    try {
        let content = await getAll()
        content.push(data)
        write(content)
        console.log("file written")
    } catch (err) {
        console.error(err)
        throw err
    }

}

const getAll = async () => {
    try {
        let content = await fs.readFile(file)
        return JSON.parse(content)
    } catch (err) {
        console.error(err)
        throw err
    }
}

const update = async (id, data) => {
    let content = await getAll()
    if (!isArray(content)) {
        throw new Error("No data found")
    }

    const itemLocation = content.findIndex(item => item.id=== id)
    console.log(id)
    if (itemLocation != -1) {
        content[itemLocation] = data
    } else {
        throw new Error(`ID: ${id} not found`)
    }

    // let's write it back to the file now
    write(content)
}

export {
    add,
    getAll,
    update
}
