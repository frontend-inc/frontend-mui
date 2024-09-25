type QuestionVariantTypeType = 'single_choice' | 'multiple_choice' | 'audio' | 'email' | 'phone' | 'url' | 'array' | 'boolean' | 'date' | 'select' | 'number' | 'string' | 'text' | 'image' | 'price' | 'location' | 'rating' | 'video' | 'file' | 'location';
type QuestionVariantType = {
    icon: string;
    label: string;
    description: string;
    color: string;
    variant: QuestionVariantTypeType;
};
export declare const SINGLE_CHOICE_QUESTION_VARIANT: QuestionVariantType;
export declare const MULTIPLE_CHOICE_QUESTION_VARIANT: QuestionVariantType;
export declare const AUDIO_QUESTION_VARIANT: QuestionVariantType;
export declare const EMAIL_QUESTION_VARIANT: QuestionVariantType;
export declare const PHONE_QUESTION_VARIANT: QuestionVariantType;
export declare const URL_QUESTION_VARIANT: QuestionVariantType;
export declare const TAG_QUESTION_VARIANT: QuestionVariantType;
export declare const BOOLEAN_QUESTION_VARIANT: QuestionVariantType;
export declare const DATE_QUESTION_VARIANT: QuestionVariantType;
export declare const SELECT_QUESTION_VARIANT: QuestionVariantType;
export declare const IMAGE_QUESTION_VARIANT: QuestionVariantType;
export declare const PRICE_QUESTION_VARIANT: QuestionVariantType;
export declare const LOCATION_QUESTION_VARIANT: QuestionVariantType;
export declare const NUMBER_QUESTION_VARIANT: QuestionVariantType;
export declare const RATING_QUESTION_VARIANT: QuestionVariantType;
export declare const STRING_QUESTION_VARIANT: QuestionVariantType;
export declare const TEXT_QUESTION_VARIANT: QuestionVariantType;
export declare const VIDEO_QUESTION_VARIANT: QuestionVariantType;
export declare const FILE_QUESTION_VARIANT: QuestionVariantType;
export declare const QUESTION_VARIANTS: QuestionVariantType[];
export {};
