// UserLogo.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserLogo = ({ onClick }) => {
  return (
    <div className="user-logo" onClick={onClick}>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

UserLogo.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UserLogo;
