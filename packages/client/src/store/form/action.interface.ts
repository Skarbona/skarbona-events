import { FormActionEnum } from "./enum";

interface ActionInterface {
  type: FormActionEnum
}

export interface IPlaceHolderAction extends ActionInterface {
  type: FormActionEnum.PlaceholderAction
}

export type FormActions = IPlaceHolderAction;
