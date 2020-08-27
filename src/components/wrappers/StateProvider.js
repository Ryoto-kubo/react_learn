import React, {Component} from 'react';
import {FILTER_ALL} from '../../services/filter';
import {MODE_CREATE, MODE_NONE} from '../../services/mode';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import {getAll, addToList, updateStatus} from '../../services/todo';

// ファイル名とclass名を一緒にする
class StateProvider extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      mode: MODE_CREATE,
      filter: FILTER_ALL,
      list: getAll()
    }
  }

  // htmlのrender
  render(){
    const children = wrapChildrenWith(this.props.children, {
      data: this.state,
      actions: objectWithOnly(this, ['addNew', 'changeFilter','changeStatus','changeMode', 'setSearchQuery'])
    })

    return <div>{children}</div>
  }
}