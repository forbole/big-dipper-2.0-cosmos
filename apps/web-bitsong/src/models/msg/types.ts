import type { BaseCategories, Log } from 'ui/models/msg/types';

export type CustomCategories = 'nft' | 'auction' | 'fantoken'; // custom modules
export type Categories = BaseCategories | CustomCategories;
export type { Log };
