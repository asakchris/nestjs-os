import { InjectOpensearchClient, OpensearchClient } from '@app/opensearch';
import { Injectable, Logger } from '@nestjs/common';
import { searchCharacterByKeyword } from './search.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  public constructor(
    @InjectOpensearchClient('os1')
    private readonly openSearchClient: OpensearchClient,
  ) {}

  async searchCharacterByKeyword(
    input: searchCharacterByKeyword,
  ): Promise<any> {
    this.logger.log(`Inside searchByKeyword() Method`);
    let body: any;

    this.logger.log(
      `Searching for Keyword: ${input.keyword} in the index : ${input.indexName} `,
    );
    body = {
      query: {
        multi_match: {
          query: input.keyword,
        },
      },
    };

    try {
      let res = await this.openSearchClient.search({
        index: input.indexName,
        body,
      });
      if (res.body.hits.total.value == 0) {
        return {
          httpCode: 200,
          data: [],
          message: `No Data found based based on Keyword: ${input.keyword}`,
        };
      }
      let result = res.body.hits.hits.map((item) => {
        return {
          _id: item._id,
          data: item._source,
        };
      });

      return {
        httpCode: 200,
        data: result,
        message: `Data fetched successfully based on Keyword: ${input.keyword}`,
      };
    } catch (error) {
      this.logger.error(`Exception occurred while doing : ${error})`);
      return {
        httpCode: 500,
        data: [],
        error: error,
      };
    }
  }

  getHello() {
    return this.searchCharacterByKeyword({
      indexName: 'characters',
      keyword: 'worth',
    });
  }
}
