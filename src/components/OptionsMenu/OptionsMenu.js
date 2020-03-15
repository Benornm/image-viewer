import React, {Fragment, useState} from 'react';
import PropTypes from "prop-types";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './OptionsMenu.scss';

const OptionsMenu = ({options, itemHeight}) => {

    const ITEM_HEIGHT = itemHeight || 48;

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const itemClick = (e, option) => {
        option.onClick && option.onClick(e);
        handleClose();
    };

    return (
        <Fragment>
            <IconButton aria-label="more" aria-controls="options-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="options-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                transformOrigin={{
                    vertical: 50,
                    horizontal: -50,
                }}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                    },
                }}
            >
                {options.map(option => (
                    <MenuItem key={option.label} onClick={(e) => itemClick(e, option)}>
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
}


OptionsMenu.propTypes = {
    options: PropTypes.array.isRequired,
    itemHeight: PropTypes.number,
};

export default OptionsMenu;
