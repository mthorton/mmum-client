import { useState } from "react";

const EventLog = () => {
    // const accessToken
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();

    return (
        <div className='main'>
            <div className="mainDiv">
                <h1>Create an Event</h1>
                <p>Use the form to create an event.</p>
                <form>
                    <label>Event Name: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
                    <label>Date: <input value={date} onChange={e => setDate(e.target.value)} /></label>
                    <label>Location: <input value={location} onChange={e => setLocation(e.target.value)} /></label>
                    <label>Description: <input value={description} onChange={e => setDescription(e.target.value)} /></label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default EventLog;