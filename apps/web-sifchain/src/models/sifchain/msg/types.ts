import type { BaseCategories } from 'ui/models/msg/types';
export type CustomCategories = 'clp' | 'dispensation' | 'ethbridge' | 'tokenregistry'; // custom modules
export type Categories = BaseCategories | CustomCategories;
