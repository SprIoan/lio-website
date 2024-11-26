const VideoPlayer = () => {
  return (
    <video autoPlay muted loop playsInline>
      <source src="/lio-vid.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
