import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

import {
  ResponsiveImg,
  ImageWrapper,
  EventBody,
  EventQuote,
} from '../../assets/styles/common'
import { Player } from 'video-react'

const Image = (content, key) => (
  <ImageWrapper key={key}>
    <ResponsiveImg width={'100%'} src={content} alt={''} />
  </ImageWrapper>
)

const Paragraph = (content, key) => <EventBody key={key}>{content}</EventBody>

const Audio = (content, key) => (
  <ReactAudioPlayer src={content} autoPlay={false} controls key={key} />
)

const Video = (content, key) => (
  <Player key={key}>
    <source src={content} />
  </Player>
)

const Youtube = (content, key) => (
  <div
    key={key}
    style={{
      position: 'relative',
      height: 0,
      paddingBottom: '56.25%',
      marginBottom: 32,
    }}
  >
    <iframe
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      title={`youtube-${content}`}
      src={`https://www.youtube.com/embed/${content}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowfullscreen
    ></iframe>
  </div>
)

const Vimeo = (content, key) => (
  <div
    key={key}
    style={{
      position: 'relative',
      height: 0,
      paddingBottom: '56.25%',
      marginBottom: 32,
      background: 'black',
    }}
  >
    <iframe
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      title={`vimeo-${content}`}
      src={`https://player.vimeo.com/video/${content}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowfullscreen
    ></iframe>
  </div>
)

const Soundcloud = (content, key) => (
  <div
    key={key}
    style={{
      marginBottom: 32,
    }}
  >
    <iframe
      title={`soundcloud-${content}`}
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${content}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}
    ></iframe>
  </div>
)

const Quote = (content, key) => <EventQuote key={key}>{content}</EventQuote>

export const elementMapping = {
  paragraph: Paragraph,
  image: Image,
  audio: Audio,
  quote: Quote,
  video: Video,
  youtube: Youtube,
  vimeo: Vimeo,
  soundcloud: Soundcloud,
}
