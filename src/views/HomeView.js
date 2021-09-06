import React from 'react';
import Container from '@material-ui/core/Container';

const styles = {
  
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <Container >
    <h1 style={styles.title}>
      Добро пожаловать на наш сервис!
    </h1>
  </Container>
  
);

export default HomeView;
