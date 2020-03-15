import React, {useRef, useState} from 'react';
import PropTypes from "prop-types";
import EditableText from "../EditableText/EditableText";
import OptionsMenu from "../OptionsMenu/OptionsMenu";
import './Modal.scss'


const Modal = ({closeModal, nextExist, prevExist, findNext, findPrev, imgSrc, title, onTitleChange, deleteImage}) => {
  const inputRef = useRef();
  const [editMode, setEditMode] = useState(false);

  const options = [
    {label: 'Rename', onClick: () => setEditMode(true)},
    {label: 'Delete', onClick: () => deleteImage()},
  ];

  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}/>
      <div className="modal">
        <div className='modal-body'>
          <div className='modal-image-container'>
            <img className='modal-img' src={imgSrc} alt={title}/>
          </div>

          <div className='modal-close modal-button' onClick={closeModal}>&times;</div>
          {prevExist && <div className='modal-prev modal-button' onClick={findPrev}>&lsaquo;</div>}
          {nextExist && <div className='modal-next modal-button' onClick={findNext}>&rsaquo;</div>}

          <div className='modal-editable-text-container'>
            <EditableText
                editMode={editMode}
                setEditMode={setEditMode}
                text={title}
                type="input"
                childRef={inputRef} height={30}>
              <input
                ref={inputRef}
                type="text"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
              />
            </EditableText>

            <div>
              <OptionsMenu options={options}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  findNext: PropTypes.func,
  findPrev: PropTypes.func,
  onTitleChange: PropTypes.func,
  deleteImage: PropTypes.func,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
};

export default Modal;
