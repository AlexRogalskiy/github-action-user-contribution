/*
 * Copyright (C) 2021 The SensibleMetrics team (http://sensiblemetrics.io/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export function charset(charsetHeader?: string, preferences?: string[]): string

export function charsets(charsetHeader?: string): string[]

export function encoding(encodingHeader?: string, preferences?: string[]): string

export function encodings(encodingHeader?: string): string[]

export function language(languageHeader?: string, preferences?: string[]): string

export function languages(languageHeader?: string): string[]

export function mediaType(mediaTypeHeader?: string, preferences?: string[]): string

export function mediaTypes(mediaTypeHeader?: string): string[]

export function parseAll(headers: Record<string, string | string[] | undefined>): {
    charsets: string[]
    encodings: string[]
    languages: string[]
    mediaTypes: string[]
}
