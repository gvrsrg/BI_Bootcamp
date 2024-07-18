export async function getInfo(url) {

    try {
        const res = await fetch(url)
        const result = await res.json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        throw new Error("Error.....")
    }

}

