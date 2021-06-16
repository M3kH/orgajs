import { BaseExpression } from 'estree'
import { Node as HastNode } from 'hast'

export type Handler = (node: HastNode, context: any) => BaseExpression

export interface Options {
  space: 'html' | 'svg';
  jsx: boolean;
  parseRaw: string[];
  defaultLayout?: string;
  handlers: { [key: string]: Handler };
  skipExport: boolean,
  wrapExport: boolean,
}

export const DEFAULT_OPTIONS: Options = {
  space: 'html',
  jsx: true,
  parseRaw: ['raw.value'],
  handlers: {},
  skipExport: false,
  wrapExport: false,
}
