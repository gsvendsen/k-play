import React from 'react';
import { Link } from 'react-router-dom';
import SideScrollContainer from '../../components/SideScrollContainer';
import VideoCard from '../../components/VideoCard';

const StartPage = () => {
  return (
    <div>
      <h1>Start Page</h1>
      <Link to="./avsnitt">Avsnitt</Link>
      <SideScrollContainer label="Forsätt titta">
        <VideoCard height="100%" margin="0% 5% 0 0"></VideoCard>
        <VideoCard height="100%" margin="0% 5% 0 0"></VideoCard>
        <VideoCard height="100%" margin="0% 5% 0 0"></VideoCard>
        <VideoCard height="100%" margin="0% 5% 0 0"></VideoCard>
        <VideoCard height="100%" margin="0% 5% 0 0"></VideoCard>
      </SideScrollContainer>
    </div>
  );
};

export default StartPage;
