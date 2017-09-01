import React from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Logo from './Logo';
import Infos from './Infos';
import Title from './Title';
import Ingresso from './Ingresso';
import VideoPlayer from './VideoPlayer';

import BackgroundPattern from '../media/images/backgroundPattern.png';
import VideoBackgroundLoop from '../media/video/background.webm';

const styles = {
  container: css({
    // backgroundImage: `url(${BackgroundPattern})`,
    background: Globals.colors.transparent,
    color: Globals.colors.primary,
    width: '100%',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
};

const Header = () =>
  <div {...styles.container}>
    <VideoPlayer />
    <Title />
    <Logo />
    <Ingresso />
    <Infos />
  </div>;

export default Header;
