/**
 * Author: Quan Vo
 * Date: 7/13/18
 */

import atom from "./src/atom";
import createAtom from "./src/createAtom";
import createReducer from "./src/createReducer";
import combine from "./src/combine";
import * as listAtoms from "./src/collection/List";
import * as mapAtoms from "./src/collection/Map";

export default {
  atom,
  createAtom,
  createReducer,
  combine,
  ...listAtoms,
  ...mapAtoms
}