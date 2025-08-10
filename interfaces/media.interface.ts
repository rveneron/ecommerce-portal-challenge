export interface IMediaItem {
  height: number;
  thumb: string;
  url: string;
  width: number;
}

export interface IBanner {
  desktop?: IMediaItem;
  mobile?: IMediaItem;
  name?: string;
  link?: string;
}
