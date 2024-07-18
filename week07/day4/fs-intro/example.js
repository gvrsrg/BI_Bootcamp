import fs from 'fs'

try {
    const data = fs.readFileSync('example.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log(error)
    
}
