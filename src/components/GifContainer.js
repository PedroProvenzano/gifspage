import React from "react";
import styled from "styled-components";
import Gif from "./Gif";
import { motion } from "framer-motion";

const GifContainer = ({ isReady, gifs }) => {
  return (
    <StyGifContainer>
      {gifs &&
        gifs.map((gif) => (
          <Gif
            title={gif.title}
            shareUrl={gif.embed_url}
            url={gif.images.fixed_height.url}
            height={gif.images.fixed_height.height}
            width={gif.images.fixed_height.width}
            key={gif.id}
          />
        ))}
    </StyGifContainer>
  );
};

const StyGifContainer = styled(motion.div)`
  padding: 2vw 5vw;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  margin-top: 4rem;
  width: 90vw;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export default GifContainer;
