export type ImageContentType = 'jpg' | 'jpeg' | 'png' | 'gif' | 'bmp' | 'webp' | 'heic';
export type VideoContentType = 'mp4' | 'webm' | 'ogg' | 'mov' | 'm4v';
export type StorageType = {
    url: string;
    height?: number;
    width?: number;
    content_type?: string;
};
export type AttachmentType = {
    id: number;
    filename?: string;
    url: string;
    content_type: ImageContentType | VideoContentType;
    thumbnail_url?: string;
    height?: number;
    width?: number;
    key?: string;
    service_name?: 'aws' | 'cloudinary' | 's3';
    byte_size?: number;
    created_at?: string;
};
export type ImageType = AttachmentType & {
    content_type: ImageContentType;
};
export type VideoType = AttachmentType & {
    content_type: VideoContentType;
};
