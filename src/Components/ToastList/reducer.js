import React from 'react';

import uniqKey from '@/units/uniqKey';

import Toast from '../Toast';

export default function reducer(state, action) {
  switch (action.type) {
    case 'addition':
      return [<Toast obj={action.addElem} key={uniqKey()} />, ...state];
    case 'remove':
      const toastsId = action.list.map((item) => item.id);
      return state.filter((item) => {
        if (toastsId.includes(item.props.obj.id)) {
          return true;
        } else {
          return false;
        }
      });
    default:
      return state;
  }
}
