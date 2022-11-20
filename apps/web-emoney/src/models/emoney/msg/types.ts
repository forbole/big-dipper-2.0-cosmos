import type { BaseCategories } from 'ui/models/msg/types';

export type CustomCategories = 'authority' | 'market' | 'liquidityProvider'; // custom modules
export type Categories = BaseCategories | CustomCategories;
