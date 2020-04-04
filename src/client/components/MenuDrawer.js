import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { toggleMenuDrawer, expandMenu, setSelectedMenu } from '../store/actions/menuDrawer';
const useStyles = makeStyles(theme => ({
    menuDiv: {
        width: 250
    }
}));

function MenuDrawer(props) {
    const classes = useStyles();
    useEffect(() => {
    }, []);
    console.log(props.isDrawerVisible, "in MenuDrawer", props);
    return (
        props.isDrawerVisible && <div className="sidebar">
            {props.sideBarItems.map((ele, index) => {
                return (<div><a onClick={() => props.expandMenu(index)}>{ele.title}</a>
                    {ele.isExpand && ele.subItem.map((subMenu, subItemIndex) => {
                        return <a className="submenu" onClick={() => props.setSelectedMenu(subItemIndex, index)}>{subMenu.title}</a>
                    })}</div>)
            })}

        </div>
    )
}

const mapStateToProps = state => ({
    isDrawerVisible: state.menuDrawer.isDrawerVisible, sideBarItems: state.menuDrawer.sideBarItems
})

const mapDispatchToProps = dispatch => ({
    toggleMenuDrawer: () => dispatch(toggleMenuDrawer()),
    expandMenu: (index) => dispatch(expandMenu(index)),
    setSelectedMenu: (subItemIndex1, index) => dispatch(setSelectedMenu(subItemIndex1, index))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)

