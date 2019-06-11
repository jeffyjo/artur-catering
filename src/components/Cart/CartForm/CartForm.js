import React, { Component } from 'react'

export default class CartForm extends Component {

	render() {
		return (
			<form
        name="cart"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="cart" />
        <div hidden>
          <label>
            {/* Don’t fill this out:{' '} */}
            <input name="bot-field" />
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor={'cartName'} >Name</label>
          <div className="control">
            <input
              className="input"
              type={'text'}
              name={'name'}
              id={'cartName'}
              required={true}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={'cartEmail'}>Email</label>
          <div className="control">
            <input
              className="input"
              type={'email'}
              name={'email'}
              id={'cartEmail'}
              required={true}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={'cartDate'}>Date</label>
          <div className="control">
            <input
              className="input"
              type={'date'}
              name={'date'}
              id={'cartDate'}
              required={true}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={'cartTime'}>Time</label>
          <div className="control">
            <input
              className="input"
              type={'time'}
              name={'time'}
              id={'cartTime'}
              required={true}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={'cartMessage'}>
            Message
          </label>
          <div className="control">
            <textarea
              className="textarea"
              name={'message'}
              id={'cartMessage'}
              required={true}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">
            Send
          </button>
        </div>
      </form>
		)
	}
}
