import {
  buildQueries,
  MatcherOptions,
  queries,
  queryHelpers,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import Mixin from 'components/Mixin';
import React, {ReactElement} from 'react';
const _queryById = queryHelpers.queryByAttribute.bind(null, 'id');

const queryById = (container: HTMLElement, id: string, options?: MatcherOptions | undefined): HTMLElement | null =>
  _queryById(container, id, options);

const queryAllInputErrorMessageByInputName = (
  container: HTMLElement,
  id: string,
  options?: MatcherOptions | undefined,
): HTMLElement[] => queryHelpers.queryAllByAttribute('id', container, `${id}-helper-text`, options);
const [
  queryInputErrorMessageByInputName,
  getAllInputErrorMessageByInputName,
  getInputErrorMessageByInputName,
  findAllInputErrorMessageByInputName,
  findInputErrorMessageByInputName,
] = buildQueries(
  queryAllInputErrorMessageByInputName,
  (_c, v: string) => `名前が${v}の入力項目に紐づくエラーメッセージ領域が複数見つかりました`,
  (_c, v: string) => `名前が${v}の入力項目に紐づくエラーメッセージ領域が見つかりませんでした`,
);

const customQueries = {
  queryAllInputErrorMessageByInputName,
  queryInputErrorMessageByInputName,
  getAllInputErrorMessageByInputName,
  getInputErrorMessageByInputName,
  findAllInputErrorMessageByInputName,
  findInputErrorMessageByInputName,
  queryById,
};

const appQueries = {
  ...queries,
  ...customQueries,
};

const AllTheProviders: React.FC = ({children}) => {
  return <Mixin>{children}</Mixin>;
};

export const flushPromises = (): Promise<unknown> => new Promise(setImmediate);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult<typeof appQueries> => {
  return render(ui, {
    wrapper: AllTheProviders,
    queries: appQueries,
    ...options,
  });
};

export * from '@testing-library/react';
export {customRender as render};
