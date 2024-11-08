import { StringEnum } from "./StringEnum";
import { SubpropKeys } from "./SubpropKeys";

export type ModeTokensEnum<T extends {[key: string]: {[key: string]: any}}> = StringEnum<SubpropKeys<T>>