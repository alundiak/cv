import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = () => (
  <View>
    <Title>Skills</Title>
    <SkillEntry
      name="Frontend"
      skills={[
        'JavaScript, CSS, HTML, LESS, SASS',
        'Backbone/Marionette, React, Angular, NodeJS, npm, Webpack, Rollup, Babel'
      ]}
    />
    <SkillEntry
      name="Other"
      skills={[
        'Git, Unix, Jenkins, Bamboo'
      ]}
    />
  </View>
);

export default Skills;
