'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'addProperties'):
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;

      case (action.type === 'removeProperties'): {
        const array = action.keysToRemove;

        for (const item of array) {
          if (state[item] !== undefined) {
            delete state[item];
          }
        }
      }
        break;

      case (action.type === 'clear'): {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
