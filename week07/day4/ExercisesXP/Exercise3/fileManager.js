
import fs from 'fs'

export function readFile(fileName) {
    try{
        return fs.readFileSync(fileName, 'utf-8')
    }
    catch(error){
        console.log(error)
    }
    return undefined    
}

export function writeFile(fileName, content) {
    try{
        fs.writeFileSync(fileName, content, 'utf-8')
    }
    catch(error){
        console.log(error)
    }
}

