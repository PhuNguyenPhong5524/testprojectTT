import { create } from 'zustand';

import { type CourseCategories } from '@/types/interface';

interface SignUpState {
  Name: string;
  Phone: string;
  Email: string;
  Address: string;
  Birthday: string;
  Day: string;
  Month: string;
  Year: string;
  Password: string;
  Gender: string;
  CheckMail: boolean;
  CheckPhone: boolean;
  IsModal: boolean;
  Disabled: boolean;
  ShowAlert: boolean;
  ShowAlertSignIn: boolean;
  ShowPassword: boolean;
  ShowConfirmPassword: boolean;
  NumberActive: number;
  LinhVuc: string[];
  SignUpFailed: boolean;
  ActivePrice: string;
  ResponseEmail: string;
  ArrGroupCategories: CourseCategories[];
  GetIdChildCategory: boolean[];
  Direction: boolean;
  DisabledMail: boolean;
  ShowAlertReset: boolean;
  ShowAlertEmail: boolean;
  ResetFailed: boolean;
}
interface Action {
  setCheckMail: (CheckMail: SignUpState['CheckMail']) => void;
  setCheckPhone: (CheckPhone: SignUpState['CheckPhone']) => void;
  setIsModal: (IsModal: SignUpState['IsModal']) => void;
  setName: (Name: SignUpState['Name']) => void;
  setPhone: (Phone: SignUpState['Phone']) => void;
  setEmail: (Email: SignUpState['Email']) => void;
  setAddress: (Address: SignUpState['Address']) => void;
  setBirthday: (Birthday: SignUpState['Birthday']) => void;
  setGender: (Gender: SignUpState['Gender']) => void;
  setPassword: (Password: SignUpState['Password']) => void;
  setDisabled: (Disabled: SignUpState['Disabled']) => void;
  setShowAlert: (ShowAlert: SignUpState['ShowAlert']) => void;
  setShowPassword: (ShowPassword: SignUpState['ShowPassword']) => void;
  setShowConfirmPassword: (ShowConfirmPassword: SignUpState['ShowConfirmPassword']) => void;
  setNumberActive: (NumberActive: SignUpState['NumberActive']) => void;
  setLinhVuc: (LinhVuc: SignUpState['LinhVuc']) => void;
  setSignUpFailed: (SignUpFailed: SignUpState['SignUpFailed']) => void;
  setActivePrice: (ActivePrice: SignUpState['ActivePrice']) => void;
  setDay: (Day: SignUpState['Day']) => void;
  setMonth: (Month: SignUpState['Month']) => void;
  setYear: (Year: SignUpState['Year']) => void;
  setResponseEmail: (ResponseEmail: SignUpState['ResponseEmail']) => void;
  setArrGroupCategories: (ArrGroupCategories: SignUpState['ArrGroupCategories']) => void;
  setGetIdChildCategory: (GetIdChildCategory: SignUpState['GetIdChildCategory']) => void;
  setDirection: (direction: SignUpState['Direction']) => void;
  setDisabledMail: (DisabledMail: SignUpState['DisabledMail']) => void;
  setShowAlertReset: (ShowAlertReset: SignUpState['ShowAlertReset']) => void;
  setShowAlertEmail: (ShowAlertEmail: SignUpState['ShowAlertEmail']) => void;
  setResetFailed: (ResetFailed: SignUpState['ResetFailed']) => void;
  setShowAlertSignIn: (ShowAlertSignIn: SignUpState['ShowAlertSignIn']) => void;
}
export const UseAuth = create<SignUpState & Action>((set) => ({
  Name: '',
  Phone: '',
  Email: '',
  Address: '',
  Birthday: '',
  Password: '',
  Gender: '',
  CheckMail: true,
  Disabled: false,
  ShowAlert: false,
  ShowPassword: false,
  ShowConfirmPassword: false,
  NumberActive: 1,
  LinhVuc: [],
  SignUpFailed: false,
  ActivePrice: '',
  Day: '',
  Month: '',
  Year: '',
  GetIdChildCategory: [],
  ResponseEmail: '',
  ArrGroupCategories: [],
  Direction: true,
  DisabledMail: false,
  ShowAlertReset: false,
  ShowAlertEmail: false,
  ResetFailed: false,
  ShowAlertSignIn: false,
  setCheckMail: (CheckMail) => {
    set(() => ({ CheckMail }));
  },
  CheckPhone: true,
  setCheckPhone: (CheckPhone) => {
    set(() => ({ CheckPhone }));
  },
  IsModal: false,
  setIsModal: (IsModal) => {
    set(() => ({ IsModal }));
  },
  setName: (Name) => {
    set(() => ({ Name }));
  },
  setPhone: (Phone) => {
    set(() => ({ Phone }));
  },
  setEmail: (Email) => {
    set(() => ({ Email }));
  },
  setAddress: (Address) => {
    set(() => ({ Address }));
  },
  setBirthday: (Birthday) => {
    set(() => ({ Birthday }));
  },
  setGender: (Gender) => {
    set(() => ({ Gender }));
  },
  setPassword: (Password) => {
    set(() => ({ Password }));
  },
  setDisabled: (Disabled) => {
    set(() => ({ Disabled }));
  },
  setShowAlert: (ShowAlert) => {
    set(() => ({ ShowAlert }));
  },
  setShowPassword: (ShowPassword) => {
    set(() => ({ ShowPassword }));
  },
  setShowConfirmPassword: (ShowConfirmPassword) => {
    set(() => ({ ShowConfirmPassword }));
  },
  setNumberActive: (NumberActive) => {
    set(() => ({ NumberActive }));
  },
  setLinhVuc: (LinhVuc) => {
    set(() => ({ LinhVuc }));
  },
  setSignUpFailed: (SignUpFailed) => {
    set(() => ({ SignUpFailed }));
  },
  setActivePrice: (ActivePrice) => {
    set(() => ({ ActivePrice }));
  },
  setDay: (Day) => {
    set(() => ({ Day }));
  },
  setMonth: (Month) => {
    set(() => ({ Month }));
  },
  setYear: (Year) => {
    set(() => ({ Year }));
  },
  setResponseEmail: (ResponseEmail) => {
    set(() => ({ ResponseEmail }));
  },
  setArrGroupCategories: (ArrGroupCategories) => {
    set(() => ({ ArrGroupCategories }));
  },
  setGetIdChildCategory: (GetIdChildCategory) => {
    set(() => ({ GetIdChildCategory }));
  },
  setDirection: (Direction) => {
    set(() => ({ Direction }));
  },
  setDisabledMail: (DisabledMail) => {
    set(() => ({ DisabledMail }));
  },
  setShowAlertReset: (ShowAlertReset) => {
    set(() => ({ ShowAlertReset }));
  },
  setShowAlertEmail: (ShowAlertEmail) => {
    set(() => ({ ShowAlertEmail }));
  },
  setResetFailed: (ResetFailed) => {
    set(() => ({ ResetFailed }));
  },
  setShowAlertSignIn: (ShowAlertSignIn) => {
    set(() => ({ ShowAlertSignIn }));
  },
}));
