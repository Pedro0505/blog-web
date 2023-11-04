import IPosts from './IPosts';

interface IPostPaginable {
  posts: IPosts[];
  total: number;
  page: number;
  lastPage: number;
}

export default IPostPaginable;
