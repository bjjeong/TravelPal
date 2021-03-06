import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = ({session, entities}) => {
  return ({ 
      currentUser: entities.users[session.id]
  });
};

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);