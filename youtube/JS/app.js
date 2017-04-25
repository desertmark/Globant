
for (let v in videos) {
    let videoView = new VideoView({
        el: '#videos',
        model: new Video(videos[v])
    });
    videoView.render();
}