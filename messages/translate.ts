import type { Messages, MessagePath } from './types';

function getByPath(obj: Messages, path: MessagePath): unknown {
  return path
    .split('.')
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === 'object'
          ? (acc as Record<string, unknown>)[key]
          : undefined,
      obj,
    );
}

function interpolate(
  template: string,
  params?: Record<string, string>,
): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? params[name] : match,
  );
}

function translate(
  messages: Messages,
  key: MessagePath,
  params?: Record<string, string>,
): string {
  const template = getByPath(messages, key);
  if (typeof template !== 'string') {
    throw new Error(`Translation key "${key}" did not resolve to a string`);
  }
  return interpolate(template, params);
}

export { translate };
