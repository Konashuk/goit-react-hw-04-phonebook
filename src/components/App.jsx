import { GlobalStyle } from 'globasStyle';
import Phonebooks from './phonebooks';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: 12,
        paddingBottom: 48,
      }}
    >
      <Phonebooks />
      <GlobalStyle />
    </div>
  );
};
