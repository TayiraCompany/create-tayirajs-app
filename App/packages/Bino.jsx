import React, { Suspense, memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import "bootstrap-icons/font/bootstrap-icons.css";

const DefaultAttr = {
  idh: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  security: PropTypes.number,
};

const LabelAtr = {
  Htf: PropTypes.instanceOf(HTMLElement),
  ...DefaultAttr,
};

const Label = memo(({ Htf, DAT = DefaultAttr, idh, cls, children }) => {
  LabelAtr.Htf = Htf;
  LabelAtr.idh = idh;
  LabelAtr.cls = cls;
  return (
    <Suspense>
      <label htmlFor={LabelAtr.Htf} className={cls} id={LabelAtr.idh}>
        {children}
      </label>
    </Suspense>
  );
});

const ImageAtr = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  ...DefaultAttr,
};

const Image = memo(({ Image, text, security, DAT = DefaultAttr, idh, cls }) => {
  ImageAtr.Image = Image;
  ImageAtr.text = text;
  ImageAtr.security = security;
  return (
    <Suspense>
      <img
        src={ImageAtr.Image}
        alt={ImageAtr.text}
        security={ImageAtr.security}
        className={cls}
        id={idh}
        loading="lazy"
        draggable
        unselectable="on"
      />
    </Suspense>
  );
});

const VideoAtr = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Video: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  poster: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  ...DefaultAttr,
};

const Video = memo(
  ({
    VideoSrc,
    text,
    autoplay,
    security,
    DAT = DefaultAttr,
    idh,
    cls,
    poster,
  }) => {
    VideoAtr.Video = VideoSrc;
    VideoAtr.text = text;
    VideoAtr.security = security;
    VideoAtr.poster = poster;

    if (VideoAtr.Video === "") {
      return (
        <Suspense>
          {" "}
          <p>{VideoAtr.text}</p>
        </Suspense>
      );
    } else {
      return (
        <Suspense>
          <video
            src={VideoAtr.Video}
            alt={VideoAtr.text}
            security={VideoAtr.security}
            className={cls}
            id={idh}
            autoPlay={autoplay}
            controls
            controlsList="all"
            unselectable="on"
            poster={VideoAtr.poster}
            preload="lazy"
          />
        </Suspense>
      );
    }
  }
);

const AudioAtr = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Audio: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  poster: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  ...DefaultAttr,
};

const AudioPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #282828;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  margin: auto;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    color: #1db954;
  }
`;

const VolumeControl = styled.input`
  width: 100px;
  margin-left: 20px;
  appearance: none;
  height: 8px;
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: #1db954;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #1db954;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ProgressBar = styled.input`
  width: 100%;
  margin: 0 10px;
  appearance: none;
  height: 8px;
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: #1db954;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #1db954;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const TimeDisplay = styled.span`
  color: white;
  font-size: 0.9rem;
`;

const MP3 = memo(
  ({ AudioSrc, autoplay, security, DAT = DefaultAttr, idh, cls, poster }) => {
    AudioAtr.Audio = AudioSrc;
    AudioAtr.security = security;
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1.0);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
      const volume = e.target.value;
      audioRef.current.volume = volume;
      setVolume(volume);
    };

    const handleProgressChange = (e) => {
      const progress = e.target.value;
      audioRef.current.currentTime = progress;
      setProgress(progress);
    };

    const handleSkipForward = () => {
      audioRef.current.currentTime += 10;
    };

    const handleSkipBackward = () => {
      audioRef.current.currentTime -= 10;
    };

    const updateProgress = () => {
      setProgress(audioRef.current.currentTime);
    };

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    useEffect(() => {
      const audio = audioRef.current;
      const setAudioData = () => {
        setDuration(audio.duration);
        setProgress(audio.currentTime);
      };

      const setAudioTime = () => setProgress(audio.currentTime);

      audio.addEventListener("loadeddata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);

      return () => {
        audio.removeEventListener("loadeddata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
      };
    }, []);

    return (
      <Suspense>
        <AudioPlayerContainer>
          <audio
            src={AudioAtr.Audio}
            security={AudioAtr.security}
            className={cls}
            id={idh}
            autoPlay={autoplay}
            controls
            controlsList="all"
            unselectable="on"
            style={{ display: "none" }}
            preload="lazy"
            ref={audioRef}
          />
          <ControlButton onClick={handleSkipBackward}>
            <i className="bi bi-skip-backward-fill"></i>
          </ControlButton>
          <ControlButton onClick={togglePlayPause}>
            {isPlaying ? (
              <i className="bi bi-pause-fill"></i>
            ) : (
              <i className="bi bi-play-fill"></i>
            )}
          </ControlButton>
          <ControlButton onClick={handleSkipForward}>
            <i className="bi bi-skip-forward-fill"></i>
          </ControlButton>
          <TimeDisplay>{formatTime(progress)}</TimeDisplay>
          <ProgressBar
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={progress}
            onChange={handleProgressChange}
          />
          <TimeDisplay>{formatTime(duration - progress)}</TimeDisplay>
          <VolumeControl
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
          />
        </AudioPlayerContainer>
      </Suspense>
    );
  }
);

// Config PropTypes

Label.propTypes = {
  Htf: PropTypes.instanceOf(HTMLElement),
  idh: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  DAT: PropTypes.shape(DefaultAttr),
};

Image.propTypes = {
  Image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  idh: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  DAT: PropTypes.shape(DefaultAttr),
};

Video.propTypes = {
  VideoSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  poster: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  idh: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  DAT: PropTypes.shape(DefaultAttr),
};

MP3.propTypes = {
  AudioSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  poster: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  idh: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  DAT: PropTypes.shape(DefaultAttr),
};

export { Label, Image, Video, MP3 };
