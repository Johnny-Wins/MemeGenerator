var userImageUploader = document.querySelector("#userImageUploader");

function picPresenter() {
    console.log("You uploaded something.");
    let userImage = this.files[0];
    console.log("test1");

    let userImgElement = document.createElement("img");
    console.log("test2");

    userImgElement.file = userImage;
    console.log("test3");

    document.querySelector("#userImagePreview").appendChild(userImgElement);
    console.log("test4");
}

userImageUploader.addEventListener("change",picPresenter);