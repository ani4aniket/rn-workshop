import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Layout from '../Layout/MainLayout/MainLayout';
const Home = () => {
  return (
    <Layout>
      <Text>Hello</Text>
      <Icon name="facebook" color="#3b5998" />
    </Layout>
  );
};

export default Home;
