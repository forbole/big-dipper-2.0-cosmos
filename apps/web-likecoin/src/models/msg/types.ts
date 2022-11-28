import type { BaseCategories, Log } from 'ui/models/msg/types';

export type CustomCategories = 'iscn';
export type Categories = BaseCategories | CustomCategories;
export type { Log };
