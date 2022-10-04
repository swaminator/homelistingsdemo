import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ListingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Listing {
  readonly id: string;
  readonly address?: string | null;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Listing, ListingMetaData>);
  static copyOf(source: Listing, mutator: (draft: MutableModel<Listing, ListingMetaData>) => MutableModel<Listing, ListingMetaData> | void): Listing;
}