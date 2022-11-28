import type { BaseCategories, Log } from 'ui/models/msg/types';

export type CustomCategories = 'clp' | 'dispensation' | 'ethbridge' | 'tokenregistry'; // custom modules
export type Categories = BaseCategories | CustomCategories;
export type { Log };
