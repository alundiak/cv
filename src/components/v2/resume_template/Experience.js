import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  company: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  position: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Italic',
  }
});

// eslint-disable-next-line
const ExperienceEntry = ({ company, details, position, date }) => {
  /* eslint react/no-array-index-key: 0 */
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.company}>
            <Text style={styles.company}>{company}</Text> | <Text style={styles.position}>{position}</Text>
          </Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const experienceData = [
  {
    company: 'Sopra Steria',
    date: '2021-present',
    details: [
      'tbd1',
      'tbd2'
    ],
    position: 'Software Architect',
  },
  {
    company: 'EQ Tek',
    date: '2019-2021',
    details: [
      'tbd1',
      'tbd2'
    ],
    position: 'Fullstack Developer',
  },
  {
    company: 'GlobalLogic Poland',
    date: '2016-2019',
    details: [
      'Delivering client projects, using mainly Backbone/Marionette and ReactJS.',
      'Contributing to Client shared UI toolkit, written mostly in ReactJS.',
      'Taking part as SCRUM member of different projects, mainly as frontend developer.',
      'Helping people with Git, NodeJS, npm and other technical stack, via provided tech talks, live coding sessions, webinars.',
    ],
    position: 'Lead Web Developer',
  },
  {
    company: 'Luxoft Poland',
    date: '2015-2016',
    details: [
      'Implementing Client back office page. Working with so called "webshell applications" based on top of NodeJS and D3JS-like component SDK',
      'Also code changes related to BackboneJS and KnockoutJS.'
    ],
    position: 'Senior Web Developer',
  },
  {
    company: 'SoftServe (Ukraine, Bulgaria)',
    date: '2011-2015',
    details: [
      'Mainly BackboneJS projects.',
    ],
    position: 'Middle Web Developer, Project Coordinator',
  },
  {
    company: 'SoftJourn (Ukraine)',
    date: '2007-2011',
    details: [
      'PHP projects with Drupal, Apache server.',
      'Java projects with Tomcat, Glassfish server.',
      'JavaScript projects.',
    ],
    position: 'Junior Web Developer',
  },
];

const Experience = () => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {experienceData.map(({ company, date, details, position }) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={company + position}
        position={position}
      />
    ))}
  </View>
);

export default Experience;
