import {SchemaType} from '@sanity/types'
import {resolveInputComponent} from '../../sanity/inputResolver/inputResolver'
import {DebugInput} from './DebugInput'

export const inputResolver = (input: SchemaType) => {
  if (input.type.name === 'document') {
    input.type.name = 'object'
  }
  const resolved = resolveInputComponent({}, undefined, input.type)
  if (resolved) {
    return resolved
  }

  return DebugInput
}
