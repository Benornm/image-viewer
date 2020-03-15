import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import OptionsMenu from "../OptionsMenu/OptionsMenu";

const EditableText = ({editMode, setEditMode, text, height, childRef, children}) => {

    useEffect(() => {
        if (childRef && childRef.current && editMode === true) {
            setTimeout(() => {
                childRef.current.focus();
            },0)
        }
    }, [editMode, childRef]);

    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            setEditMode(false)
        }
    };

    const style = {display: 'inline-block', minHeight: height};

    return (
        <Fragment>
            {editMode ?
                (
                    <div
                        style={style}
                        onBlur={() => setEditMode(false)}
                        onKeyDown={handleEnterPress}>
                        {children}
                    </div>
                ) :
                (
                    <div onClick={() => setEditMode(true)} style={style}>
                        {text}
                    </div>
                )}
        </Fragment>
    );
};

OptionsMenu.propTypes = {
    editMode: PropTypes.bool,
    setEditMode: PropTypes.func,
    text: PropTypes.string,
    height: PropTypes.number,
    childRef: PropTypes.object,
    children: PropTypes.object,
};

export default EditableText;
