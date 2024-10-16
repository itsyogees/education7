import React from 'react';
import styles from './Assigments.module.scss';

const assignmentsData = [
  {
    title: 'Web Designing',
    assignmentNumber: 'Assignment 4',
    status: 'completed'
  },
  {
    title: 'React Development',
    assignmentNumber: 'Assignment 2',
    status: 'pending'
  }
];

const Assignments = () => {
  return (
    <div className={styles.Assignments}>
      <div className={styles.AssignmentsContainer}>
        <div className={styles.AssignmentsHead}>
          <h2>Assignments</h2>
        </div>
        <div className={styles.AssignmentsContent}>
          <div className={styles.AssignmentsCards}>
            {assignmentsData.map((assignment, index) => (
              <div key={index} className={styles.AssignmentsCard}>
                <h2>{assignment.title}</h2>
                <p>{assignment.assignmentNumber}</p>
                <div className={styles.completed}>
                  <button>Get started</button>
                  {assignment.status === 'completed' ? (
                    <button className={styles.completed}>View Mark</button>
                  ) : (
                    <button className={styles.pending}>Pending</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
