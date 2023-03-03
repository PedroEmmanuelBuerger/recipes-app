import React from 'react';
import PropTypes from 'prop-types';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  return (
    <AppReceitasContext.Provider>
      {children}
    </AppReceitasContext.Provider>
  );
}

AppReceitasProvider.propTypes = { children: PropTypes.node.isRequired };

export default AppReceitasProvider;
