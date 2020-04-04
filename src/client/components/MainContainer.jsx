import React from 'react';
import GroupMasterAdd from './groupMaster/GroupMasterAdd.tsx';
import { connect } from 'react-redux';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='conatiner-padding'>
        {this.props.selectedMenu.index === 0 &&
          this.props.selectedMenu.subItemIndex === 0 && (
            <GroupMasterAdd></GroupMasterAdd>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMenu: state.menuDrawer.selectedMenu,
});

export default connect(mapStateToProps, null)(MainContainer);
