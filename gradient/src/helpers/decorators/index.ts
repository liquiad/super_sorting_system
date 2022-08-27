import { Decorator } from './types';
import { anvilNameDecorator } from './anvilName';
import { enchantmentsDecorator } from './enchantments';
import { shulkerDecorator } from './shulker';

export * from './types';

export const decorators: Decorator[] = [
  anvilNameDecorator,
  enchantmentsDecorator,
  shulkerDecorator,
];
