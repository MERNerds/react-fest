import React from 'react';
//import 'devextreme/dist/css/dx.dark.css';
import Scheduler, { AppointmentDragging, Resource, notify } from 'devextreme-react/scheduler';
import Draggable from 'devextreme-react/draggable';
import ScrollView from 'devextreme-react/scroll-view';
import { appointments, tasks, genreData, resourcesList } from '../utils/data';
import RadioGroup from 'devextreme-react/radio-group';
//import { ResourceAssignments } from 'devextreme-react/gantt';


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
      radioGroupValue: resourcesList,
    };
    this.onAppointmentRemove = this.onAppointmentRemove.bind(this);
    this.onAppointmentAdd = this.onAppointmentAdd.bind(this);
    this.onRadioGroupValueChanged = this.onRadioGroupValueChanged.bind(this);

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
            {this.state.tasks.map((task) => {
              // Get the corresponding genre data based on task id
              const genre = genreData.find(genre => genre.id === task.genre);
              // Create a style and set its background color to the genre's color
              const style = {
                backgroundColor: genre ? genre.color : "initial"
              };

              return (
                <Draggable
                  key={task.text}
                  className="item dx-card dx-theme-text-color" // Do not forget to remove the 'dx-theme-background-color' class to prevent conflict with the style above
                  style={style} // Set the draggable element's style
                  clone={true}
                  group={draggingGroupName}
                  data={task}
                  onDragStart={this.onItemDragStart}
                  onDragEnd={this.onItemDragEnd}>
                  {task.text}
                </Draggable>
              );
            })}
          </Draggable>
        </ScrollView>
        <div className="options">
          <div className="caption">CLICK TO FILTER BY GENRE:</div>
          <div className="option">
            <RadioGroup
              items={resourcesList}
              value={this.state.radioGroupValue}
              layout="horizontal"
              onValueChanged={this.onRadioGroupValueChanged}
            />
          </div>
        </div>
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

          <Resource
            dataSource={appointments}
            fieldExpr="hipId"
            label="Hip-hop"
            useColorAsDefault={this.state.radioGroupValue === 'Hip-hop'}
          />

          <Resource
            dataSource={tasks}
            fieldExpr="genre"
            label="EDM"
            useColorAsDefault={this.state.radioGroupValue === 'EDM'}
          />

          <Resource
            dataSource={tasks}
            fieldExpr="genre"
            label="Alternative/Rock"
            useColorAsDefault={this.state.radioGroupValue === 'Alternative/Rock'}
          />


        </Scheduler>
        <div className="options">
          <div className="caption">CLICK TO FILTER BY GENRE:</div>
          <div className="option">
            <RadioGroup
              items={resourcesList}
              value={this.state.radioGroupValue}
              layout="horizontal"
              onValueChanged={this.onRadioGroupValueChanged}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  onRadioGroupValueChanged(args) {
    this.setState({
      radioGroupValue: args.value,
    });
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
      // this.state.appointments.push(e.itemData); // Instead of adding the data generated by the Scheduler to the appointments array
      this.state.appointments.push(e.fromData); // you add the task data

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




  notifyDisableDate() {
    notify('Cannot create or move an appointment/event to disabled time/date regions.', 'warning', 1000);
  }

}

export default Schedule;
