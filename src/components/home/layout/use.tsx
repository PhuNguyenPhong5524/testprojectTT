import { type User } from '@/services';
import { create } from 'zustand';

import {
  type Categories,
  type Course,
  type GroupCate,
  type HomePage,
  type PackageCourse,
  type TestLession,
} from '@/types/interface';

interface StateHome {
  MobileNav: boolean;
  OpenForm: boolean;
  ObjectUser: User;
  Token: string | null;
  ChangeLession: number;
  ArrLession: TestLession[];
  ChangeGoal: number;
  ArrGoal: TestLession[];
  ArrCoures: Course[];
  CheckIndex: number;
  ArrCategory: Categories[];
  ShowNav: boolean;
  ShowCourse: GroupCate[];
  ShowPacket: PackageCourse[];
  ShowHomePage: HomePage;
}
interface Action {
  setMobileNav: (MobileNav: StateHome['MobileNav']) => void;
  setOpenForm: (OpenForm: StateHome['OpenForm']) => void;
  setObjectUser: (ObjectUser: StateHome['ObjectUser']) => void;
  setToken: (Token: StateHome['Token']) => void;
  setChangeLession: (ChangeLession: StateHome['ChangeLession']) => void;
  setArrLession: (ArrLession: StateHome['ArrLession']) => void;
  setChangeGoal: (ChangeGoal: StateHome['ChangeGoal']) => void;
  setArrGoal: (ArrGoal: StateHome['ArrGoal']) => void;
  setArrCoures: (ArrCoures: StateHome['ArrCoures']) => void;
  setCheckIndex: (CheckIndex: StateHome['CheckIndex']) => void;
  setArrCategory: (ArrCategory: StateHome['ArrCategory']) => void;
  setShowNav: (ShowNav: StateHome['ShowNav']) => void;
  setShowCourse: (ShowCourse: StateHome['ShowCourse']) => void;
  setShowPacket: (ShowPacket: StateHome['ShowPacket']) => void;
  setShowHomePage: (ShowHomePage: StateHome['ShowHomePage']) => void;
}

export const UseHome = create<StateHome & Action>((set) => ({
  MobileNav: false,
  setMobileNav: (MobileNav) => {
    set(() => ({ MobileNav }));
  },
  OpenForm: false,
  setOpenForm: (OpenForm) => {
    set(() => ({ OpenForm }));
  },
  ObjectUser: {
    address: '',
    birthday: '',
    childrens: [],
    email: '',
    enableNotification: false,
    gender: '',
    id: '',
    name: '',
    phone: '',
    roleTitle: '',
    status: '',
  },
  setObjectUser: (ObjectUser) => {
    set(() => ({ ObjectUser }));
  },
  Token: null,
  setToken: (Token) => {
    set(() => ({ Token }));
  },
  ChangeLession: -1,
  setChangeLession: (ChangeLession) => {
    set(() => ({ ChangeLession }));
  },
  ArrLession: [],
  setArrLession: (ArrLession) => {
    set(() => ({ ArrLession }));
  },
  ChangeGoal: -1,
  setChangeGoal: (ChangeGoal) => {
    set(() => ({ ChangeGoal }));
  },
  ArrGoal: [],
  setArrGoal: (ArrGoal) => {
    set(() => ({ ArrGoal }));
  },
  ArrCoures: [],
  setArrCoures: (ArrCoures) => {
    set(() => ({ ArrCoures }));
  },
  CheckIndex: 0,
  setCheckIndex: (CheckIndex) => {
    set(() => ({ CheckIndex }));
  },
  ArrCategory: [],
  setArrCategory: (ArrCategory) => {
    set(() => ({ ArrCategory }));
  },
  ShowNav: false,
  setShowNav: (ShowNav) => {
    set(() => ({ ShowNav }));
  },
  ShowCourse: [],
  setShowCourse: (ShowCourse) => {
    set(() => ({ ShowCourse }));
  },
  ShowPacket: [],
  setShowPacket: (ShowPacket) => {
    set(() => ({ ShowPacket }));
  },
  ShowHomePage: {
    id: '',
    key: '',
    dynamicFields: {
      titleSeo: '',
      decriptionSeo: '',
      title: '',
      userTestimonial: '',
      instructorParticipation: '',
      immersiveLearningExperience: '',
      reviews: [],
      faqSection: {
        title: '',
        content: '',
        subTitle: '',
        subContent: '',
        faqData: [],
      },
      serviceOptions: '',
      freeConsultationOffer: '',
      pathSection: {
        title: '',
        question: '',
        image: '',
        pathData: [],
      },
    },
    createdAt: '',
    updatedAt: '',
  },
  setShowHomePage: (ShowHomePage) => {
    set(() => ({ ShowHomePage }));
  },
}));
