import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>IFNTUONG</Text>
    <Text style={styles.degree}>Engineer system-analyst</Text>
    <Text style={styles.candidate}>2002-2007</Text>
    <Text style={styles.school}>KEP</Text>
    <Text style={styles.degree}>Technician</Text>
    <Text style={styles.candidate}>1998-2002</Text>
  </View>
);
