import {TasksAC} from './tasks-action-creators.js'
import {TodoAC} from './todolist-action-creators.js'

export const ActionCreators = {
    ...TasksAC,
    ...TodoAC
}