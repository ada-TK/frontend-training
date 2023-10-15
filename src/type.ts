import {ReactNode} from 'react';
import {FieldPath, FieldValues, RegisterOptions} from 'react-hook-form';

export type RequireChildren = {children: ReactNode};

export type RuleRHF<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;

/**
 * エラー画面遷移時に動的にメッセージを設定する場合
 */
export type HistoryErrorPage = {
  message: string;
};
