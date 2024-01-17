/**
 * @Author Mario Krause
 * @file resources\plugins\vue-i18n\index.ts
 * @description
 * @created 13.07.2022
 * @last_edit: 01.07.2023
 */

import { createI18n } from 'vue-i18n';

// @ts-ignore
import deDE from './locales/de-DE.toml';
// @ts-ignore
import enUS from './locales/en-US.toml';


export const i18n = createI18n({
  messages: {'de-DE': deDE.messages, 'en-US': enUS.messages},
  legacy: false,
  locale: 'de-DE',
  fallbackLocale: 'de-DE'
})