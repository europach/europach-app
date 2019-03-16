import React from 'react';
import { logicDefinitions } from '../../logics/definitions';
import { Section } from '../../assets/styles/common';
import { Definitions } from './styles';

const InfoTile = (props) => (
  <Section padding={'0 0 12px 0'}>
    <p>
      <strong>{ props.title }</strong>
      &nbsp;-&nbsp;{ props.content }
    </p>
  </Section>
)

export class LogicDefinitions extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  intro = () => (
    <Section padding={'0 0 12px 0'}>
      <p>
        To help the user best navigate and benefit from this interactive map, we have developed
        these concise definitions to describe the terms that structure it. Please contact us here
        if you would like more information or to discuss them further.
      </p>
    </Section>
  )

  logics = () => (
    <Section padding={'0 0 12px 0'}>
      <hr />
        <p>
          <strong>Logics</strong>
          &nbsp;-&nbsp;the explicit or implicit ways for understanding and, thereby, for producing the world.
          These are used to determine whether and how to act or not to act when confronted with a
          given situation. They influence how we understand and value ourselves and others.
        </p>
      <hr />
    </Section>
  )

  renderContent = () => (
    <div>
      { this.intro() }
      { this.logics() }
      {
        logicDefinitions.map(({ title, content }) => (
          <InfoTile title={title} content={content}/>
        ))
      }

    </div>
  )

  render() {
    return (
      <div>
       <Definitions onClick={this.toggle}>
        + view definitions
       </Definitions>

        { this.state.open && this.renderContent() }
      </div>
    );
  }
};