import React from 'react';
import {MODE_NONE, MODE_CREATE, MODE_SEARCH} from '../../services/mode';


export default function ButtonWrapper(props) {
  const {mode, changeMode} = props
  const isCreateMode = () => mode === MODE_CREATE
  const isSearchMode = () => mode === MODE_SEARCH

  return (
    <div>
      <a title="新しくタスクを追加"
        className={'button add ' + (isCreateMode() ? 'selected' : '')}
        onClick={( ) => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}></a>
      <a title="検索"
        className={'button search ' +(isSearchMode() ? 'selected' : '') }
        onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}></a>
    </div>
  )
}