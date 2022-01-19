import React from 'react';


import Scheduler, { AppointmentDragging, Resource } from 'devextreme-react/scheduler';
import Draggable from 'devextreme-react/draggable';
import ScrollView from 'devextreme-react/scroll-view';

import { appointments, tasks, genreData } from '../utils/data';


const currentDate = new Date(2022, 3, 18);
const views = [
  {
    name: '1 Day', type: 'day', intervalCount: 1, startDate: new Date(2022, 3, 18)
  },
  {
    name: '3 Days', type: 'day', intervalCount: 3, startDate: new Date(2022, 3, 18)
  }
    
];
const draggingGroupName = 'appointmentsGroup';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks,
      appointments,
    };
    this.onAppointmentRemove = this.onAppointmentRemove.bind(this);
    this.onAppointmentAdd = this.onAppointmentAdd.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        
        <ScrollView id="scroll">
          <Draggable
            id="list"
            data="dropArea"
            group={draggingGroupName}
            onDragStart={this.onListDragStart}>
            {this.state.tasks.map((task) => <Draggable
              key={task.text}
              className="item dx-card dx-theme-text-color dx-theme-background-color"
              clone={true}
              group={draggingGroupName}
              data={task}
              onDragStart={this.onItemDragStart}
              onDragEnd={this.onItemDragEnd}>
              {task.text}
            </Draggable>)}

          </Draggable>
        </ScrollView>
        <Scheduler
          
          timeZone="Africa/Abidjan"
          id="scheduler"
          dataSource={this.state.appointments}
          views={views}
          defaultCurrentDate={currentDate}
          height={900}
          startDayHour={15}
          editing={true}>
          <AppointmentDragging
            group={draggingGroupName}
            onRemove={this.onAppointmentRemove}
            onAdd={this.onAppointmentAdd}
          />
           <Resource
            fieldExpr="genre"
            allowMultiple={false}
            dataSource={genreData}
            label="Genre"
          />
        </Scheduler>
      </React.Fragment>
    );
  }

  onAppointmentRemove(e) {
    const index = this.state.appointments.indexOf(e.itemData);

    if (index >= 0) {
      this.state.appointments.splice(index, 1);
      this.state.tasks.push(e.itemData);

      this.setState({
        tasks: [...this.state.tasks],
        appointments: [...this.state.appointments],
      });
    }
  }

  onAppointmentAdd(e) {
    const index = this.state.tasks.indexOf(e.fromData);

    if (index >= 0) {
      this.state.tasks.splice(index, 1);
      this.state.appointments.push(e.itemData);

      this.setState({
        tasks: [...this.state.tasks],
        appointments: [...this.state.appointments],
      });
    }
  }

  onListDragStart(e) {
    e.cancel = true;
  }

  onItemDragStart(e) {
    e.itemData = e.fromData;
  }

  onItemDragEnd(e) {
    if (e.toData) {
      e.cancel = true;
    }
  }
  
}

export default Schedule;
