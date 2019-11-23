import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Countdown from 'react-countdown-now';

import { FirebaseContext } from '../../context/firebase';
import Config from '../../config';

import './style.css';

export class EventPage extends Component {
  static contextType = FirebaseContext;

  constructor(props, context) {
    super(props, context); 
    this.state = {
      event: {
        name: '',
        startDate: '',
        endDate: '',
        message: ''
      },
      slides: [],
      colors: ['#0092cc', '#0092cc', '#0092cc'],
      db: this.context.database
    }
  }

  updateHandler(doc) {
    const { config, slides } = doc.data();
    console.log(slides[0]);
    this.setState({ slides: slides });
  }

  componentDidMount() {
    const eventId = this.props.match.params.id;
    this.state.db.collection('events')
      .doc(eventId)
      .onSnapshot(this.updateHandler.bind(this));

  }

  render() {
    return (
      <ReactFullpage
        
        // Configured to use the GPL license key.
        licenseKey={Config.fullpage.license}
        sectionsColor={this.state.colors}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Please configure your event!</p>
              </div>
              {this.state.slides.map((value, index) => { 
                return <div key={index} className="section">
                  <p>{value.type}</p>
                </div>
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
}
}
