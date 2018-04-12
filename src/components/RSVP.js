import React from 'react';
import Input from './Input';

import './RSVP.css';

const FINAL_CLASS = 'final';
const VERIFY_STEP = 'confirm';
const CALENDAR_STEP = 'cal';
const EVENT_STEP = 'event';
const RSVP_STEP = 'rsvp';
const SORRY_STEP = 'sorry';
const STEPS = [VERIFY_STEP, RSVP_STEP, CALENDAR_STEP, EVENT_STEP];

const DAYS = ['Tuesday, Sept 18th', 'Wednesday, Sept 19th', 'Thursday, Sept 20th', 'Friday, Sept 21st (Wedding)', 'Saturday, Sept 22nd'];

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      dialogAnimated: false,
      formStep: CALENDAR_STEP,
      guestName: '<guest name>',
      data: {
        rsvpCode: '',
      },
      error: {},
    };

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.submit = this.submit.bind(this);
  }
  openDialog() {
    document.body.style.overflow = 'hidden';
    this.setState({
      isDialogOpen: true,
    });
    setTimeout(() => this.setState({
      dialogAnimated: FINAL_CLASS,
    }), 50);
  }
  closeDialog() {
    document.body.style.overflow = 'visible';
    this.setState({
      isDialogOpen: false,
      dialogAnimated: false,
    });
  }
  set(key, pred = x => x) {
    return evt => this.setState({
      data: {
        ...this.state.data,
        [key]: evt.target.value === '$$infer' ? evt.target.checked : pred(evt.target.value),
      },
    });
  }
  prevStep(evt) {
    evt.preventDefault();
    const index = STEPS.indexOf(this.state.formStep);
    this.setState({
      formStep: STEPS[index - 1],
      error: {},
    });
  }
  getDays() {
    return ([
      this.state.data.day1,
      this.state.data.day2,
      this.state.data.day3,
      this.state.data.day4,
      this.state.data.day5,
    ]).map((x, i) => x && i + 1).filter(x => x);
  }
  submit(evt) {
    evt.preventDefault();
    switch (this.state.formStep) {
      case VERIFY_STEP:
        if (this.state.data.rsvpCode /* VALIDATE */) {
          this.setState({
            formStep: RSVP_STEP,
            error: {},
          });
        } else {
          this.setState({
            error: {
              rsvpCode: 'Your RSVP code is required to continue',
            },
          });
        }
        break;
      case RSVP_STEP:
        if (this.state.data.rsvp === 'yes') {
          this.setState({
            formStep: CALENDAR_STEP,
            error: {},
          });
        } else if (this.state.data.rsvp === 'no') {
          this.setState({
            formStep: SORRY_STEP,
            error: {},
          });
        } else {
          this.setState({
            error: {
              rsvpNo: 'Please choose an option',
            },
          });
        }
        break;
      case CALENDAR_STEP:
        if (this.getDays().length > 0 && this.state.data.headcount) {
          this.setState({
            formStep: EVENT_STEP,
            error: {},
          });
        } else {
          this.setState({
            error: {
              days: this.getDays().length === 0 && 'Please choose at least one day',
              headcount: !this.state.data.headcount && 'Please choose at least one day',
            },
          });
        }
        break;
      default:
        throw new Error('form step not configured');
    }
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <button className="big-button" onClick={this.openDialog}>RSVP</button>
        {this.state.isDialogOpen &&
          <div className={`dialog-screen ${this.state.dialogAnimated}`} onClick={this.closeDialog}>
            <div className={`dialog ${this.state.dialogAnimated}`} onClick={evt => evt.stopPropagation()}>
              <button className="close" onClick={this.closeDialog}>&times;</button>
                <form onSubmit={this.submit}>
                  {this.state.formStep === VERIFY_STEP &&
                    <div>
                      <h2>Code</h2>
                      <Input
                        name="What is your RSVP code?"
                        type="text"
                        placeholder="XXXXX"
                        maxLength="5"
                        value={this.state.data.rsvpCode}
                        onChange={this.set('rsvpCode', val => val.toUpperCase())}
                        error={this.state.error.rsvpCode}
                      />
                    </div>
                  }
                  {this.state.formStep === RSVP_STEP &&
                    <div>
                      <h2>RSVP</h2>
                      <div className="form-heading">
                        Will you be able to join us in Positano?
                      </div>
                      <Input
                        name="Yes!"
                        formName="rsvp"
                        type="radio"
                        value="yes"
                        checked={this.state.data.rsvp === 'yes'}
                        onChange={this.set('rsvp', x => 'yes')}
                      />
                      <Input
                        name="Unfortunately, we can't make it."
                        formName="rsvp"
                        type="radio"
                        value="no"
                        checked={this.state.data.rsvp === 'no'}
                        onChange={this.set('rsvp', x => 'no')}
                        error={this.state.error.rsvpNo}
                      />
                    </div>
                  }
                  {this.state.formStep === CALENDAR_STEP &&
                    <div>
                      <h2>Trips Details</h2>
                      <div className="form-heading">
                        How many people are in your party?
                      </div>
                      {[1, 2, 3, 4, 5].map(i => (
                        <Input
                          key={i}
                          name={`${i}`}
                          formName="headcount"
                          type="radio"
                          value={`${i}`}
                          checked={this.state.data.headcount === i}
                          onChange={this.set('headcount', x => i)}
                          error={i === 5 && this.state.error.headcount}
                        />
                      ))}
                      <div className="form-heading">
                        Which days will you be in Positano?
                      </div>
                      {DAYS.map((day, i) => (
                        <Input
                          key={day}
                          name={day}
                          type="checkbox"
                          checked={this.state.data[`day${i+1}`] || false}
                          onChange={this.set(`day${i+1}`)}
                          error={i === 4 && this.state.error.days}
                        />
                      ))}
                    </div>
                  }
                  {this.state.formStep === EVENT_STEP &&
                    <div>
                      <h2>Events</h2>
                      <div className="form-heading">
                        Please choose which events you'd like to RSVP for:
                      </div>
                      <Input
                        name="Day trip to Capri"
                        type="checkbox"
                        checked={this.state.data.eventCapri || false}
                        onChange={this.set('eventCapri')}
                      />
                    </div>
                  }
                  <div className="form-nav">
                    {this.state.formStep !== VERIFY_STEP &&
                      <button className="md-button gray-button" onClick={this.prevStep}>Prev</button>
                    }
                    <button className="md-button">Next</button>
                  </div>
                </form>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default RSVP;
