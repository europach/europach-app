import React from 'react'
import { logicDefinitions } from '../../logics/definitions'
import { Section, BodyText, BodySubHead } from '../../assets/styles/common'
import { Definitions } from './styles'

const InfoTile = props => (
  <Section padding={'0 0 12px 0'}>
    <BodyText>
      <strong>{props.title}</strong>
      <br />
      {props.content}
    </BodyText>
  </Section>
)

export class LogicDefinitions extends React.Component {
  constructor() {
    super()
    this.state = { open: false }
  }

  toggle = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  intro = () => (
    <Section padding={'24px 0 12px 0'}>
      <BodySubHead>
        To help the user best navigate and benefit from this interactive map, we
        have developed these concise definitions to describe the terms that
        structure it. Please contact us here if you would like more information
        or to discuss them further.
      </BodySubHead>
    </Section>
  )

  logics = () => (
    <Section padding={'0 0 12px 0'}>
      <BodyText>
        <strong>Logics</strong>
        <br />
        the explicit or implicit ways for understanding and, thereby, for
        producing the world. These are used to determine whether and how to act
        or not to act when confronted with a given situation. They influence how
        we understand and value ourselves and others.
      </BodyText>
    </Section>
  )

  renderContent = () => (
    <div>
      {this.intro()}
      {this.logics()}
      {logicDefinitions.map(({ title, content }) => (
        <InfoTile title={title} content={content} />
      ))}
    </div>
  )

  render() {
    return (
      <div>
        <Definitions onClick={this.toggle}>+ view definitions</Definitions>

        {this.state.open && this.renderContent()}
      </div>
    )
  }
}
