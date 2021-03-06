import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = React.memo(props => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

	useEffect( () => {
		setStatus(props.status)
	}, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deActivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onChangeText = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode &&
      <div>
        <span onDoubleClick={ activateEditMode }>{props.status || '______'}</span>
      </div>
      }
      {editMode &&
        <div>
          <input onChange={ onChangeText } value={ status } onBlur={ deActivateEditMode } autoFocus={true}/>
        </div>
      }

    </div>
  )
})

export default ProfileStatusWithHooks;