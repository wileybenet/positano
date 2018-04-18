import React from 'react';
import Input from './Input';
import Loader from './Loader';

import './RSVP.css';

const API = 'https://woi7gmgcw4.execute-api.us-east-1.amazonaws.com/prod/rsvp';
const FINAL_CLASS = 'final';

const VERIFY_STEP = 'confirm';
const RSVP_STEP = 'rsvp';
const CALENDAR_STEP = 'cal';
const SUCCESS_STEP = 'You\'re RVSP\'d!';
const SORRY_STEP = 'We\'re bummed!';

const STEPS = [VERIFY_STEP, RSVP_STEP, CALENDAR_STEP];

const DAYS = ['Tuesday, Sept 18th', 'Wednesday, Sept 19th', 'Thursday, Sept 20th', 'Friday, Sept 21st (Wedding)', 'Saturday, Sept 22nd'];

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      dialogAnimated: false,
      prevStep: null,
      formStep: VERIFY_STEP,
      guestName: '<guest name>',
      totalGuestsAllowed: 1,
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
  openDialog(evt) {
    evt.preventDefault();
    document.body.style.overflow = 'hidden';
    this.setState({
      isDialogOpen: true,
    });
    setTimeout(() => this.setState({
      dialogAnimated: FINAL_CLASS,
    }), 50);
  }
  closeDialog(evt) {
    evt.preventDefault();
    document.body.style.overflow = 'visible';
    this.setState({
      isDialogOpen: false,
      dialogAnimated: false,
      formStep: VERIFY_STEP,
    });
  }
  set(key, pred = x => x) {
    return evt => this.setState({
      data: {
        ...this.state.data,
        [key]: pred(evt.target.value === '$$infer' ? evt.target.checked : evt.target.value),
      },
    });
  }
  prevStep(evt) {
    evt.preventDefault();
    this.setState({
      formStep: STEPS[STEPS.indexOf(this.state.formStep) - 1],
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
    ]).filter(x => x);
  }
  async validate(code) {
    this.setState({ loading: true });
    const response = await fetch(`${API}?code=${code}`, {
      mode: 'cors',
    });
    this.setState({ loading: false });
    const { status } = response;
    if (status === 200) {
      const body = await response.json();
      return body.guest;
    } else if (status === 404) {
      throw new Error(`"${code}" is an invalid code, please check your invite`);
    } else if (status === 400) {
      throw new Error('Your code is required in order to continue');
    }
    throw new Error('An unknown error occurred, email us or sumpn');
  }
  async sendData(nextStep) {
    const data = this.state.data;
    const body = {
      code: data.rsvpCode,
      props: {
        secret: this.state.secret,
        Submitted: new Date().toUTCString(),
        RSVP: data.rsvp,
        Headcount: data.headcount || 0,
        Tue: data.day1 ? 1 : 0,
        Wed: data.day2 ? 1 : 0,
        Thur: data.day3 ? 1 : 0,
        Fri: data.day4 ? 1 : 0,
        Sat: data.day5 ? 1 : 0,
      },
    };
    this.setState({ loading: true });
    const response = await fetch(API, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
    this.setState({ loading: false });
    if (response.status === 200) {
      return this.setState({
        prevStep: RSVP_STEP,
        formStep: nextStep,
      });
    }
    throw new Error('An unknown error occurred, email us or sumpn');
  }
  async submit(evt) {
    evt.preventDefault();
    switch (this.state.formStep) {
      case VERIFY_STEP:
        try {
          this.setState({ loading: true });
          const guest = await this.validate(this.state.data.rsvpCode);
          return this.setState({
            prevStep: VERIFY_STEP,
            formStep: RSVP_STEP,
            guestName: guest.Guest,
            secret: guest.secret,
            totalGuestsAllowed: Number(guest.Pluses) + 1,
            error: {},
            loading: false,
          });
        } catch (err) {
          return this.setState({
            error: {
              rsvpCode: err.message,
            },
            loading: false,
          });
        }
      case RSVP_STEP:
        if (this.state.data.rsvp === 'yes') {
          return this.setState({
            prevStep: RSVP_STEP,
            formStep: CALENDAR_STEP,
            error: {},
          });
        } else if (this.state.data.rsvp === 'no') {
          this.setState({ error: {}, message: 'But we understand, thank you for letting us know.' });
          return this.sendData(SORRY_STEP);
        }
        return this.setState({
          error: {
            rsvpNo: 'Please choose an option',
          },
        });
      case CALENDAR_STEP:
        if (this.getDays().length > 0 && this.state.data.headcount) {
          this.setState({ error: {}, message: 'Thank you for RSVPing, we can\'t wait to see you in Italy!' });
          return this.sendData(SUCCESS_STEP);
        }
        return this.setState({
          error: {
            days: this.getDays().length === 0 && 'You gotta stay at least one day',
            headcount: !this.state.data.headcount && 'Please select "1" at the least',
          },
        });
      default:
        throw new Error('form step not configured');
    }
  }
  render() {
    return (
      <div>
        <button className="md-button" onClick={this.openDialog}>RSVP</button>
        {this.state.isDialogOpen &&
          <div className={`dialog-screen ${this.state.dialogAnimated}`} onClick={this.closeDialog}>
            <div className={`dialog ${this.state.dialogAnimated}`} onClick={evt => evt.stopPropagation()}>
              <button className="close" onClick={this.closeDialog}>&times;</button>
              {this.state.formStep === SUCCESS_STEP || this.state.formStep === SORRY_STEP
                ? (
                    <form>
                      <h2>{this.state.formStep}</h2>
                      <p>{this.state.message}</p>
                      <button className="md-button" onClick={this.closeDialog}>Done</button>
                    </form>
                  )
                : (
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
                          <h2>Ciao, {this.state.guestName}!</h2>
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
                          {new Array(this.state.totalGuestsAllowed).fill(null).map((x, i) => i + 1).map(i => (
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
                      <div className="form-nav">
                        {this.state.formStep !== VERIFY_STEP &&
                          <button className="md-button gray-button" onClick={this.prevStep}>Prev</button>
                        }
                        <button className="md-button" disabled={this.state.loading ? 'disabled' : null}>
                          {this.state.loading
                            ? <Loader />
                            : 'Next'
                          }
                        </button>
                      </div>
                    </form>
                  )
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

export default RSVP;
