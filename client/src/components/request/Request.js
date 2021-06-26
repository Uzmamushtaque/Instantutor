import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formData from '../profile-forms/ProfileForm'
import { createRequest } from '../../actions/request';

const Request = ({createRequest}) => {
    const [requestData, setRequestData] = useState({
        request: '',
        course: '',
        grade: '',
        topic: '',
        help_time: '',
        availability: [],
        number_sessions: ''
    });

    const { request, course, grade, topic, help_time, availability, number_sessions} = requestData;
    const onChange = e => setRequestData({ ...requestData, [e.target.name]: e.target.value });

    const setAvailability = e => {
        if (e.target.checked)
            setRequestData({ ...requestData,
                availability: requestData.availability.concat(e.target.name) });
        else
            setRequestData({ ...requestData,
                availability: requestData.availability.filter( elem => elem !== e.target.name) });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await createRequest(requestData);
    };

    return (
        <>
            {(formData.role==='Student'||'Both') && (
            <Fragment>

            <h1 className="large text-primary">Open a Request!</h1>
            <small>* = required field</small>

            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* What do you need help with?"
                        name="request"
                        value={request}
                        onChange={onChange} />
                    <small className="form-text">
                        Give us some details about what you're looking for.
                    </small>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Subject"
                        name="course"
                        value={course}
                        onChange={onChange}
                    />
                    <small className="form-text">
                        What subject do you need help with eg. Math, Biology, English, ...?
                    </small>
                </div>

                <div className="form-group">
                    <select name="grade" value={grade} onChange={onChange}>
                        <option>What is the level of this problem?</option>
                        <option value="None">Don't know</option>
                        <option value="K-12">K-12</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="PHD">PHD</option>
                    </select>
                    <small className="form-text">
                        What is the academic difficulty of your request?
                    </small>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Topic"
                        name="topic"
                        value={topic}
                        onChange={onChange}
                    />
                    <small className="form-text">
                        What is the specific topic you need help with?
                    </small>
                </div>

                <div className="form-group">
                    <select name="help_time" value={help_time} onChange={onChange}>
                        <option>When do you need help?</option>
                        <option value="ASAP">As soon as possibile</option>
                        <option value="Today">Today</option>
                        <option value="Week">This week</option>
                        <option value="Month">Within the month</option>
                    </select>
                    <small className="form-text">
                        Approximately how quickly do you need help?
                    </small>
                </div>

                <div className="form-group">
                    <div>
                        <input name="sunday morning" type="checkbox" onChange={setAvailability}></input>
                        <input name="monday morning" type="checkbox" onChange={setAvailability}></input>
                        <input name="tuesday morning" type="checkbox" onChange={setAvailability}></input>
                        <input name="wednesday morning" type="checkbox" onChange={setAvailability}></input>
                        <input name="thursday morning" type="checkbox" onChange={setAvailability}></input>
                        <input name="friday morning" type="checkbox" onChange={setAvailability}></input>
                        <input name="saturday morning" type="checkbox" onChange={setAvailability}></input>
                    </div>
                    <div>
                        <input name="sunday evening" type="checkbox" onChange={setAvailability}></input>
                        <input name="monday evening" type="checkbox" onChange={setAvailability}></input>
                        <input name="tuesday evening" type="checkbox" onChange={setAvailability}></input>
                        <input name="wednesday evening" type="checkbox" onChange={setAvailability}></input>
                        <input name="thursday evening" type="checkbox" onChange={setAvailability}></input>
                        <input name="friday evening" type="checkbox" onChange={setAvailability}></input>
                        <input name="saturday evening" type="checkbox" onChange={setAvailability}></input>
                    </div>
                    <div>
                        <input name="sunday night" type="checkbox" onChange={setAvailability}></input>
                        <input name="monday night" type="checkbox" onChange={setAvailability}></input>
                        <input name="tuesday night" type="checkbox" onChange={setAvailability}></input>
                        <input name="wednesday night" type="checkbox" onChange={setAvailability}></input>
                        <input name="thursday night" type="checkbox" onChange={setAvailability}></input>
                        <input name="friday night" type="checkbox" onChange={setAvailability}></input>
                        <input name="saturday night" type="checkbox" onChange={setAvailability}></input>
                    </div>
                    <small className="form-text">
                        When are you generally available?
                    </small>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="How many sessions do you want help with?"
                        name="number_sessions"
                        value={number_sessions}
                        onChange={onChange}
                    />
                    <small className="form-text">
                        Enter the number of sessions you need help with eg: 0, 3, 5 ...
                    </small>
                </div>
                
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                    Go Back
                </Link>
                </form>
            </Fragment>
            )}

          
        </>
    )
};

/*
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {createRequest })(Request);
*/

Request.propTypes = {
    createRequest: PropTypes.func.isRequired
}

export default connect(null, {createRequest })(Request);
