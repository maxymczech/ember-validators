import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';
import requireModule from 'ember-require-module';

import collection from './collection';
import confirmation from './confirmation';
import date from './date';
import dsError from './ds-error';
import exclusion from './exclusion';
import format from './format';
import inclusion from './inclusion';
import length from './length';
import messages from './messages';
import number from './number';
import presence from './presence';

export function validate(type, ...args) {
  const validators = {
    collection,
    confirmation,
    date,
    'ds-error': dsError,
    exclusion,
    format,
    inclusion,
    length,
    messages,
    number,
    presence
  };
  const validator = validators[type];

  assert(`Validator not found of type: ${type}.`, isPresent(validator));

  return validator(...args);
}
