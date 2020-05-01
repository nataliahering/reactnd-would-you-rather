import {
  _getUsers
} from './_DATA.js'

export function getUsers () {
  return _getUsers().then((users) => users)
}