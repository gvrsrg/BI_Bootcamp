// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video{

    constructor(title, uploader, time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`)
    }
}

let myVideo = new Video("myVideo", "me", 10)

myVideo.watch()

let myVideo2 = new Video("myVideo2", "me", 20)

myVideo2.watch()

let myVideo3 = new Video("myVideo3", "me", 30)
let myVideo4 = new Video("myVideo4", "me", 40)
let myVideo5 = new Video("myVideo5", "me", 50)

let myVideosData = [
    {
        title: "The Grand Adventure",
        uploader: "JohnDoe123",
        time: 7215
    },
    {
        title: "Mystery in the Woods",
        uploader: "JaneSmith456",
        time: 3645
    },
    {
        title: "Romance at Sunset",
        uploader: "EmilyJones789",
        time: 5400
    },
    {
        title: "Space Odyssey",
        uploader: "SpaceFanatic",
        time: 10200
    },
    {
        title: "Comedy Central",
        uploader: "LaughOutLoud",
        time: 4800
    }
];


let myVideos = myVideosData.map(item => new Video(item.title, item.uploader, item.time))

console.log(myVideos);