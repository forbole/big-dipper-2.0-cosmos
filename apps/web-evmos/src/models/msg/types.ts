import type { BaseCategories } from 'ui/models/msg/types';

export type CustomCategories = 'erc20' | 'evm'; // custom modules
export type Categories = BaseCategories | CustomCategories;
