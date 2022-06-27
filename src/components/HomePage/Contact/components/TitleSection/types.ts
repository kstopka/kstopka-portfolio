import { DescriptionProps } from '../Description/types';
import { PrimaryTitleProps } from '../PrimaryTitle/types';
import { SecondaryTitleProps } from '../SecondaryTitle/types';

export type TitleSectionProps = {
  primaryTitle: PrimaryTitleProps;
  secondaryTitle: SecondaryTitleProps;
  descriptions: DescriptionProps;
};
