declare namespace API {
  // TODO: check
  export type CurrentUser = {
    avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
      key: string;
      label: string;
    }[];
    userid?: string;
    access?: 'user' | 'guest' | 'admin';
    unreadCount?: number;
  };
  // TODO: check
  export type LoginStateType = {
    status?: 'ok' | 'error';
    type?: string;
  };
  // TODO: check
  export type NoticeIconData = {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  };

  export type Pagination = {
    page: number;
    pageSize: number;
  }
}
