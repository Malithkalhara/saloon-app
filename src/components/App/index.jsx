import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from 'components/AppRouter';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <ThemeProvider theme={theme}> */}
          <AppRouter />
        {/* </ThemeProvider> */}
      </Router>
    </QueryClientProvider>
  );
};

export default App;
