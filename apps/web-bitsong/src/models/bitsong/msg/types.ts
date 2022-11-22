import type { BaseCategories } from 'ui/models/msg/types';

export type CustomCategories = 'nft' | 'auction' | 'fantoken'; // custom modules
export type Categories = BaseCategories | CustomCategories;
