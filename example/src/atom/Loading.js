/**
 * Author: Quan Vo
 * Date: 7/12/18
 */

import {atom} from "@blueish9/redux-atom/dist";

export const hideFetching = atom('HIDE_FETCHING', () => ({fetching: false}));