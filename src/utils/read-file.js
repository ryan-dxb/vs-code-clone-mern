import {v4 as uuidv4} from 'uuid'

export const readFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.readAsText(file)
        reader.onload = () => {

            // Example of name and webkitRelativePath
            // name = index.js
            // webkitRelativePath = src/index.js

            const {name, webkitRelativePath} = file;
            const id = uuidv4()
            const code = typeof reader.result === 'string' ? reader.result : ''
            const splitName = name.split('.')
            const extension = splitName[splitName.length - 1]
            resolve({id, name, webkitRelativePath, code, extension})
        }
        reader.onerror = (err) => {
            reject(err)
        }
    })
}