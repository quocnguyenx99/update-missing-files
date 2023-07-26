import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import FaqsContainer from '../containers/faqs';
import HeaderContainer from '../containers/header';
import { OtpForm } from '../components';
import Feature from '../components/feature';

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited movies, TV shows, and more.
          </Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

          <OtpForm>
            <OtpForm.Text>Ready to watch? Enter your email to create or restart your membership.</OtpForm.Text>
            <OtpForm.Input placeholder="Email address" />
            <OtpForm.Button>Get Started</OtpForm.Button>
          </OtpForm>
        </Feature>

      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
