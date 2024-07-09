(function (userName, picture){
    var navbar = document.getElementById('navbar');
    var userNameDiv = document.createElement("div");
    var pictureDiv = document.createElement("img");
    userNameDiv.innerHTML = userName;
    pictureDiv.src = picture;
    navbar.appendChild(userNameDiv);
    navbar.appendChild(pictureDiv);
})("William, Prince of Wales", "https://scontent.fhfa1-1.fna.fbcdn.net/v/t39.30808-1/416709381_279565225137920_1126095667906532761_n.jpg?stp=c0.0.188.188a_dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=5ftcZlaa_LsQ7kNvgGyPn6x&_nc_ht=scontent.fhfa1-1.fna&oh=00_AYAChDQb5EYw2PklbmymUWYw9oEtiAolirrj5g_XlhEArA&oe=66937D6C")