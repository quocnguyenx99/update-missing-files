import React from 'react';
import { Accordion, OtpForm } from '../components';
import faqsData from '../fixtures/faqs.json';

function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OtpForm>
        <OtpForm.Text>Ready to watch? Enter your email to create or restart your membership.</OtpForm.Text>
        <OtpForm.Input placeholder="Email address" />
        <OtpForm.Button>Get Started</OtpForm.Button>
      </OtpForm>
    </Accordion>
  );
}

export default FaqsContainer;
