import React, { useContext } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';

// Components
import Peep21 from '../assets/collections/open-peeps/21.png';
import Peep32 from '../assets/collections/open-peeps/32.png';
import MilestoneData from '../databases/MilestoneData.json';
import ScheduleData from '../databases/ScheduleData.json';
import { DarkModeContext } from '../contexts/DarkModeContext';

const TimelineGraph = () => {
  const { darkMode } = useContext(DarkModeContext);

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='main'>
      <h3>Timeline Graph <span className='under-construction'>(* under-construction 🚧)</span></h3>
      <p className='first-line paragraph'>Here you can see an interactive timeline and choose what to show in it.</p>
      <p className='last-line paragraph'>The graphic below can either provide general information about lifetime milestones or provide a more detailed
        description of an ordinary weekday schedule. 🚧</p>
      <div>
        <div className='side-by-side centered'>
          <div>
            <img
              className='activity-img-vert img-smaller'
              src={Peep21}
              alt='person laughing'
              style={{width: 180, height: 430, marginTop: 48 }}
            />
          </div>
          <div className='timeline-schedule'>
            <Timeline position='alternate'>
              <div>
                {ScheduleData.length > 0 && (
                  <div className='timeline-container'>
                    <h3 className='timeline-limit'>START</h3>
                    {ScheduleData.map((activity, id) => (
                      <TimelineItem key={id}>
                        <TimelineOppositeContent
                          className={darkMode ? '' : 'timeline-content-light'}
                          sx={{ m: 'auto 0' }}
                          variant='body2'>
                          <p>{activity.time}</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector className={darkMode ? '' : 'timeline-connector-light'} />
                          <TimelineDot className={darkMode ? '' : 'timeline-dot-light'}>
                            <p>{activity.icon}</p>
                          </TimelineDot>
                          <TimelineConnector className={darkMode ? '' : 'timeline-connector-light'} />
                        </TimelineSeparator>
                        <TimelineContent >
                          <h3>{activity.tag}</h3>
                          <p>{activity.text}</p>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                    <h3 className='timeline-limit'>END</h3>
                  </div>
                )}
              </div>
            </Timeline>
          </div>
          <div className='bottomed'>
            <img
              className='activity-img-vert img-smaller'
              src={Peep32}
              alt='person chewing'
              style={{width: 180, height: 250, marginBottom: 48 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default TimelineGraph;