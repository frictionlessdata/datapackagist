const React = require('react')
const classNames = require('classnames')
const {withStateHandlers} = require('recompose')
const {EditorSchema} = require('./EditorSchema')


// Module API

function EditorResource({

  // Props
  descriptor,
  columns,
  index,

  // State
  isSettingsActive,
  toggleSettings,

}) {
  return (
    <div className="panel">

      {/* Metadata */}
      <div className="panel-heading" role="tab" id="resource-one-heading">
        <div className="title">
          <label>Name</label>
          <input className="form-control" autoComplete="off" type="text" defaultValue={descriptor.name}/>
        </div>
        <div className="actions">
          <a className={classNames('settings-button', 'action', {active: isSettingsActive})} onClick={toggleSettings}>
            <svg><use xlinkHref="#icon-settings" /></svg><span className="text">Settings</span>
          </a>
          <a role="button" data-toggle="collapse" href={`#collapse${index}`} aria-expanded="true" aria-controls="collapseOne">
            <svg><use xlinkHref="#icon-expand" /></svg><span className="text">Expand / collapse</span>
          </a>
        </div>
        <div className={classNames('settings', {active: isSettingsActive})}>
          <span>
            <label className="control-label">Title</label>
            <input className="form-control" pattern="^([a-z0-9._-])+$" name="root[resources][0][name]" autoComplete="off" type="text" defaultValue={descriptor.title} />
            <label className="control-label">Profile</label>
            <select data-id="list-container" className="form-control list-container" autoComplete="off">
              <option value="base">Data Resource</option>
              <option selected={descriptor.profile === 'tabular-data-resource'} value="tabular">Tabular Data Resource</option>
            </select>
            <label className="control-label">Path</label>
            <input className="form-control" name="root[resources][0][path]" autoComplete="off" type="text" defaultValue={descriptor.path} />
            <label className="control-label">Format</label>
            <input className="form-control" name="root[resources][0][format]" autoComplete="off" type="text" defaultValue={descriptor.format} />
            <label className="control-label">Encoding</label>
            <input className="form-control" name="root[resources][0][encoding]" autoComplete="off" type="text" defaultValue={descriptor.encoding} />
          </span>
          <span>
            <label className="control-label">Description</label>
            <textarea className="form-control" data-schemaformat="textarea" name="root[resources][0][description]" defaultValue={descriptor.description} />
          </span>
        </div>
      </div>

      {/* Schema */}
      <div id={`collapse${index}`} className={classNames('panel-collapse', 'collapse', {in: index === 0})} role="tabpanel" aria-labelledby="resource-one-heading">
        <div className="panel-body">
          <EditorSchema descriptor={descriptor.schema} columns={columns} />
        </div>
      </div>

    </div>
  )
}


// Internal

const initialState = {
  isSettingsActive: false,
}

const toggleSettings = ({isSettingsActive}) => () => {
  return {isSettingsActive: !isSettingsActive}
}


// System

module.exports = {
  EditorResource: withStateHandlers(initialState, {toggleSettings})(EditorResource),
}
