import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CoursesList from './CoursesList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CoursesList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps)  {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
