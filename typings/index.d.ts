export function charset(charsetHeader?: string, preferences?: string[]): string;

export function charsets(charsetHeader?: string): string[];

export function encoding(encodingHeader?: string, preferences?: string[]): string;

export function encodings(encodingHeader?: string): string[];

export function language(languageHeader?: string, preferences?: string[]): string;

export function languages(languageHeader?: string): string[];

export function mediaType(mediaTypeHeader?: string, preferences?: string[]): string;

export function mediaTypes(mediaTypeHeader?: string): string[];

export function parseAll(headers: Record<string, string | string[] | undefined>): {
    charsets: string[]
    encodings: string[]
    languages: string[]
    mediaTypes: string[]
};
