export class DataSet {
  indexName: string;
  characters: Charaters[];
}

export class Charaters {
  id: string;
  name: string;
  quote: string;
}

export class DeleteInput {
  indexName: string;
  id?: string;
}

export class searchCharacterByKeyword {
  indexName: string;
  keyword: string;
}