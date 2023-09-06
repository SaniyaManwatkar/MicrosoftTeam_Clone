const startscreenrecording = () => {
  const stream = navigator.mediaDevices
    .getDisplayMedia({
      video: {
        MediaSource: "screen",
      },
    })
    .then((stream) => {
      console.log("server recieved our data");
      const data = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => {
        data.push(e.data);
      };
      mediaRecorder.start();
      mediaRecorder.onstop = (e) => {
        const stopscreenrec = document.querySelector("button#stopscreen");
        stopscreenrec.style.display = "block";

        console.log("video capture");
        document.querySelector("video#record1").src = URL.createObjectURL(
          new Blob(data, {
            type: data[0].type,
          })
        );
      };
    });
};
