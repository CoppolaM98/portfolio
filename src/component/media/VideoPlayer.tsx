import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { useDebounce } from "utils/hooks/useDebounce";
import { CSSProperties, useEffect, useState } from "react";

export const safePlay = (video: HTMLVideoElement) => new Promise((resolve, reject) => {
    const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
        && video.readyState > video.HAVE_CURRENT_DATA;

    if (!isPlaying) {
        var playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(resolve)
                .catch(error => reject(error));
        }
    }
})

export const safePause = (video: HTMLVideoElement) => new Promise((resolve) => {
    const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
        && video.readyState > video.HAVE_CURRENT_DATA;

    if (isPlaying) {
        video.pause()
        resolve(true);
    }
})



export interface VideoPlayerProps {
    src: string;
    poster?: string;
}

export const VideoPlayer = ({ src: videoSrc, poster: posterImageSrc, ...flexProps }: FlexProps & VideoPlayerProps) => {

    const cssOverrides: CSSProperties = { width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }

    const [debouncedPlay, handlePlayRequest, overridePlayStatus] = useDebounce<boolean>(false, 1000);

    const [videoPlayerRef, setVideoPlayerRef] = useState<HTMLVideoElement | null>();

    useEffect(() => {
        if (!videoPlayerRef) return;
        if (debouncedPlay) safePlay(videoPlayerRef)
        else safePause(videoPlayerRef)
    }, [debouncedPlay, videoPlayerRef])

    return <Flex {...flexProps}
        onMouseOver={e => {
            handlePlayRequest(true)
            //const videoEl = (e.target as HTMLVideoElement)
            //safePlay(videoEl)
        }}
        onMouseOut={e => {
            handlePlayRequest(false)
            //const videoEl = (e.target as HTMLVideoElement)
            //safePause(videoEl)
        }} >
        <Box position="relative" width="100%" height="100%">
            {posterImageSrc && <img src={posterImageSrc} alt={"video cover"} style={{
                ...cssOverrides,
                objectFit: "cover",
                zIndex: 1, position: "absolute"
            }}
                hidden={debouncedPlay} />}
            <video ref={(ref) => setVideoPlayerRef(ref)}
                onPlay={() => overridePlayStatus(true)}
                onPause={() => overridePlayStatus(false)}
                src={videoSrc}
                poster={posterImageSrc}
                style={{
                    ...cssOverrides,
                    objectFit: "contain"
                }}
                controls muted playsInline
            />
        </Box>
    </Flex>
}